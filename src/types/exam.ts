export type SkillTab = 'listening' | 'reading' | 'writing';

export type AudioSourceId =
  | 'booking-table'
  | 'finding-library'
  | 'ordering-cafe'
  | 'shopping-clothes'
  | 'meeting-other-students'
  | 'organising-group-project'
  | 'meeting-new-team-member'
  | 'request-your-boss'
  | 'voicemail-message'
  | 'first-english-class'
  | 'changing-plans'
  | 'business-cards';

export interface AudioSource {
  id: AudioSourceId;
  title: string;
  level: 'A1' | 'A2';
  url: string;
}

export interface OptionItem {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface ListeningPart1Question {
  number: number; // 1-5
  audioTitle: string;
  audioId: AudioSourceId;
  prompt: string;
  options: OptionItem[];
  answer: 'A' | 'B' | 'C';
}

export interface ListeningPart2Question {
  number: number; // 6-10
  prompt: string;
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
  note?: string;
}

export interface ListeningPart2 {
  audioTitle: string;
  audioId: AudioSourceId;
  instruction: string;
  questions: ListeningPart2Question[];
  options: OptionItem[];
}

export interface ListeningMCQQuestion {
  number: number;
  prompt: string;
  options: OptionItem[];
  answer: 'A' | 'B' | 'C';
}

export interface ListeningMCQPart {
  audioTitle: string;
  audioId: AudioSourceId;
  instruction: string;
  questions: ListeningMCQQuestion[];
}

export interface ReadingMCQQuestion {
  number: number;
  prompt: string;
  options: OptionItem[];
  answer: 'A' | 'B' | 'C' | 'D';
}

export interface ReadingSection3 {
  title: string;
  passage: string;
  questions: ReadingMCQQuestion[];
}

export interface ReadingSection4 {
  instruction: string;
  wordBank: string[];
  /** Segments alternate or contain {{21}} blank tokens */
  passageWithBlanks: string;
  answers: Record<number, string>;
  note?: string;
}

export interface WritingTransformationItem {
  number: number; // 1-5
  original: string;
  starter: string;
  acceptedAnswers: string[];
  modelAnswer: string;
}

export interface WritingEmailTask {
  prompt: string;
  requirements: string[];
  targetWords: number;
  sampleAnswer: string;
}

export interface ExamSet {
  id: number; // 1 to 5 (fixed order, never shuffled)
  title: string;
  subtitle: string;
  listening: {
    durationMinutes: number;
    part1: ListeningPart1Question[];
    part2: ListeningPart2;
    part3: ListeningMCQPart;
    part4: ListeningMCQPart;
  };
  reading: {
    durationMinutes: number;
    section1: ReadingMCQQuestion[]; // 1-10
    section2: ReadingMCQQuestion[]; // 11-15
    section3: ReadingSection3; // 16-20
    section4: ReadingSection4; // 21-30
  };
  writing: {
    section1: WritingTransformationItem[]; // 1-5
    section2: WritingEmailTask;
  };
}

export interface EmailRubricScores {
  taskCompletion: number; // 0 | 0.25 | 0.5
  organization: number; // 0 | 0.25 | 0.5
  vocabulary: number; // 0 | 0.25 | 0.5
  grammar: number; // 0 | 0.25 | 0.5
}

export interface ExamState {
  listeningAnswers: Record<number, string>; // 1..20 -> 'A'|'B'|'C'|'D'|'E'
  readingAnswers: Record<number, string>; // 1..20 -> letter, 21..30 -> word string
  writingTransformations: Record<number, string>; // 1..5 -> sentence completion
  writingEmail: string;
  emailRubric: EmailRubricScores;
  audioListens: Record<string, number>; // slotKey -> listen count
  submitted: boolean;
  showAnswerKey: boolean;
  lastUpdated?: number;
}
