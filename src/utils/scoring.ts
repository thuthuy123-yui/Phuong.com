import { ExamSet, ExamState } from '../types/exam';

export function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[.?!,;:\s]+$/g, '')
    .replace(/\s+/g, ' ');
}

export function isTransformationCorrect(userInput: string, acceptedAnswers: string[]): boolean {
  const normalized = normalizeText(userInput);
  if (!normalized) return false;
  return acceptedAnswers.some((ans) => normalizeText(ans) === normalized);
}

export function isReadingBlankCorrect(userInput: string, expected: string): boolean {
  const normalized = normalizeText(userInput);
  if (!normalized) return false;
  return normalized === normalizeText(expected);
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export interface ExamScoreSummary {
  listeningCorrect: number;
  listeningTotal: number;
  listeningScore: number; // / 10
  readingCorrect: number;
  readingTotal: number;
  readingScore: number; // / 7.0
  writingS1Correct: number;
  writingS1Score: number; // / 1.0
  writingEmailScore: number; // / 2.0
  writingScore: number; // / 3.0
  paper2Score: number; // / 10.0
  finalScore: number; // / 10.0
  answeredCount: number;
  totalItems: number;
}

export function calculateExamScore(exam: ExamSet, state: ExamState): ExamScoreSummary {
  let listeningCorrect = 0;

  for (const q of exam.listening.part1) {
    if (state.listeningAnswers[q.number] === q.answer) listeningCorrect++;
  }
  for (const q of exam.listening.part2.questions) {
    if (state.listeningAnswers[q.number] === q.answer) listeningCorrect++;
  }
  for (const q of exam.listening.part3.questions) {
    if (state.listeningAnswers[q.number] === q.answer) listeningCorrect++;
  }
  for (const q of exam.listening.part4.questions) {
    if (state.listeningAnswers[q.number] === q.answer) listeningCorrect++;
  }

  let readingCorrect = 0;
  for (const q of exam.reading.section1) {
    if (state.readingAnswers[q.number] === q.answer) readingCorrect++;
  }
  for (const q of exam.reading.section2) {
    if (state.readingAnswers[q.number] === q.answer) readingCorrect++;
  }
  for (const q of exam.reading.section3.questions) {
    if (state.readingAnswers[q.number] === q.answer) readingCorrect++;
  }
  for (const [numStr, expected] of Object.entries(exam.reading.section4.answers)) {
    const num = Number(numStr);
    if (isReadingBlankCorrect(state.readingAnswers[num] || '', expected)) {
      readingCorrect++;
    }
  }

  let writingS1Correct = 0;
  for (const item of exam.writing.section1) {
    if (isTransformationCorrect(state.writingTransformations[item.number] || '', item.acceptedAnswers)) {
      writingS1Correct++;
    }
  }

  const listeningScore = Number(((listeningCorrect / 20) * 10).toFixed(2));
  const readingScore = Number(((readingCorrect / 30) * 7).toFixed(2));
  const writingS1Score = Number((writingS1Correct * 0.2).toFixed(2));

  const emailWords = countWords(state.writingEmail);
  const rubricSum =
    state.emailRubric.taskCompletion +
    state.emailRubric.organization +
    state.emailRubric.vocabulary +
    state.emailRubric.grammar;
  const writingEmailScore = emailWords > 0 ? Number(rubricSum.toFixed(2)) : 0;

  const writingScore = Number((writingS1Score + writingEmailScore).toFixed(2));
  const paper2Score = Number((readingScore + writingScore).toFixed(2));
  const finalScore = Number(((listeningScore + paper2Score) / 2).toFixed(2));

  const answeredListening = Object.values(state.listeningAnswers).filter(Boolean).length;
  const answeredReading = Object.values(state.readingAnswers).filter((v) => v && v.trim().length > 0).length;
  const answeredTransformations = Object.values(state.writingTransformations).filter(
    (v) => v && v.trim().length > 0
  ).length;
  const answeredEmail = emailWords > 0 ? 1 : 0;

  return {
    listeningCorrect,
    listeningTotal: 20,
    listeningScore,
    readingCorrect,
    readingTotal: 30,
    readingScore,
    writingS1Correct,
    writingS1Score,
    writingEmailScore,
    writingScore,
    paper2Score,
    finalScore,
    answeredCount: answeredListening + answeredReading + answeredTransformations + answeredEmail,
    totalItems: 56,
  };
}
