import { exam1 } from './exam1';
import { exam2 } from './exam2';
import { exam3 } from './exam3';
import { exam4 } from './exam4';
import { exam5 } from './exam5';
import { ExamSet, ExamState } from '../types/exam';

// Strictly fixed order 1 -> 5, never shuffled
export const EXAM_SETS: ExamSet[] = [exam1, exam2, exam3, exam4, exam5];

export function createEmptyExamState(): ExamState {
  return {
    listeningAnswers: {},
    readingAnswers: {},
    writingTransformations: {},
    writingEmail: '',
    emailRubric: {
      taskCompletion: 0.5,
      organization: 0.5,
      vocabulary: 0.5,
      grammar: 0.5,
    },
    audioListens: {},
    submitted: false,
    showAnswerKey: false,
  };
}
