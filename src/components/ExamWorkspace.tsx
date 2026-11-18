import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  ListChecks,
  Pause,
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { EXAM_SETS } from '../data/exams';
import { EmailRubricScores, ExamSet, ExamState, SkillTab } from '../types/exam';
import { calculateExamScore, isReadingBlankCorrect, isTransformationCorrect } from '../utils/scoring';
import { ListeningSection } from './ListeningSection';
import { ReadingSection } from './ReadingSection';
import { WritingSection } from './WritingSection';

interface ExamWorkspaceProps {
  exam: ExamSet;
  state: ExamState;
  activeSkill: SkillTab;
  onChangeSkill: (skill: SkillTab) => void;
  onSelectExam: (examId: number) => void;
  onBackOverview: () => void;
  onUpdateState: (updater: (prev: ExamState) => ExamState) => void;
  onResetExam: () => void;
}

export function ExamWorkspace({
  exam,
  state,
  activeSkill,
  onChangeSkill,
  onSelectExam,
  onBackOverview,
  onUpdateState,
  onResetExam,
}: ExamWorkspaceProps) {
  const [timerMode, setTimerMode] = useState<'paper1' | 'paper2'>(
    activeSkill === 'listening' ? 'paper1' : 'paper2'
  );
  const [secondsLeft, setSecondsLeft] = useState<number>(
    activeSkill === 'listening' ? 20 * 60 : 70 * 60
  );
  const [timerRunning, setTimerRunning] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    const targetMode = activeSkill === 'listening' ? 'paper1' : 'paper2';
    if (targetMode !== timerMode && !timerRunning) {
      setTimerMode(targetMode);
      setSecondsLeft(targetMode === 'paper1' ? 20 * 60 : 70 * 60);
    }
  }, [activeSkill, timerMode, timerRunning]);

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const switchTimerPreset = (mode: 'paper1' | 'paper2') => {
    setTimerRunning(false);
    setTimerMode(mode);
    setSecondsLeft(mode === 'paper1' ? 20 * 60 : 70 * 60);
  };

  const score = useMemo(() => calculateExamScore(exam, state), [exam, state]);
  const revealAnswers = state.submitted || state.showAnswerKey;

  const handleListeningAnswer = (qNum: number, opt: string) => {
    onUpdateState((prev) => ({
      ...prev,
      listeningAnswers: { ...prev.listeningAnswers, [qNum]: opt },
      lastUpdated: Date.now(),
    }));
  };

  const handleReadingAnswer = (qNum: number, val: string) => {
    onUpdateState((prev) => ({
      ...prev,
      readingAnswers: { ...prev.readingAnswers, [qNum]: val },
      lastUpdated: Date.now(),
    }));
  };

  const handleTransformationChange = (qNum: number, val: string) => {
    onUpdateState((prev) => ({
      ...prev,
      writingTransformations: { ...prev.writingTransformations, [qNum]: val },
      lastUpdated: Date.now(),
    }));
  };

  const handleEmailChange = (val: string) => {
    onUpdateState((prev) => ({
      ...prev,
      writingEmail: val,
      lastUpdated: Date.now(),
    }));
  };

  const handleRubricChange = (rubric: EmailRubricScores) => {
    onUpdateState((prev) => ({
      ...prev,
      emailRubric: rubric,
      lastUpdated: Date.now(),
    }));
  };

  const handleIncrementListen = (slotKey: string) => {
    onUpdateState((prev) => ({
      ...prev,
      audioListens: {
        ...prev.audioListens,
        [slotKey]: (prev.audioListens[slotKey] || 0) + 1,
      },
      lastUpdated: Date.now(),
    }));
  };

  const handleResetListen = (slotKey: string) => {
    onUpdateState((prev) => ({
      ...prev,
      audioListens: { ...prev.audioListens, [slotKey]: 0 },
      lastUpdated: Date.now(),
    }));
  };

  const handleSubmit = () => {
    setTimerRunning(false);
    onUpdateState((prev) => ({
      ...prev,
      submitted: true,
      showAnswerKey: true,
      lastUpdated: Date.now(),
    }));
  };

  const handleToggleAnswerKey = () => {
    onUpdateState((prev) => ({
      ...prev,
      showAnswerKey: !prev.showAnswerKey,
      lastUpdated: Date.now(),
    }));
  };

  const scrollToQuestion = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setMobileNavOpen(false);
  };

  const renderNavigatorGrid = () => {
    if (activeSkill === 'listening') {
      const listeningAnswerMap: Record<number, string> = {};
      exam.listening.part1.forEach((q) => (listeningAnswerMap[q.number] = q.answer));
      exam.listening.part2.questions.forEach((q) => (listeningAnswerMap[q.number] = q.answer));
      exam.listening.part3.questions.forEach((q) => (listeningAnswerMap[q.number] = q.answer));
      exam.listening.part4.questions.forEach((q) => (listeningAnswerMap[q.number] = q.answer));

      return (
        <div className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            const val = state.listeningAnswers[num];
            const isCorrect = val && val === listeningAnswerMap[num];

            let cls = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
            if (revealAnswers) {
              cls = isCorrect
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold'
                : 'bg-rose-50 border-rose-300 text-rose-800 font-semibold';
            } else if (val) {
              cls = 'bg-sky-700 border-sky-700 text-white font-semibold';
            }

            return (
              <button
                key={num}
                type="button"
                onClick={() => scrollToQuestion(`q-l-${num}`)}
                className={`h-9 rounded-md border font-mono tabular-nums text-xs transition-colors cursor-pointer ${cls}`}
              >
                {num}
              </button>
            );
          })}
        </div>
      );
    }

    if (activeSkill === 'reading') {
      const readingMCQMap: Record<number, string> = {};
      exam.reading.section1.forEach((q) => (readingMCQMap[q.number] = q.answer));
      exam.reading.section2.forEach((q) => (readingMCQMap[q.number] = q.answer));
      exam.reading.section3.questions.forEach((q) => (readingMCQMap[q.number] = q.answer));

      return (
        <div className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => {
            const val = (state.readingAnswers[num] || '').trim();
            const isCorrect =
              num <= 20
                ? val === readingMCQMap[num]
                : isReadingBlankCorrect(val, exam.reading.section4.answers[num] || '');

            let cls = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
            if (revealAnswers) {
              cls = isCorrect
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold'
                : 'bg-rose-50 border-rose-300 text-rose-800 font-semibold';
            } else if (val) {
              cls = 'bg-sky-700 border-sky-700 text-white font-semibold';
            }

            return (
              <button
                key={num}
                type="button"
                onClick={() => scrollToQuestion(`q-r-${num}`)}
                className={`h-9 rounded-md border font-mono tabular-nums text-xs transition-colors cursor-pointer ${cls}`}
              >
                {num}
              </button>
            );
          })}
        </div>
      );
    }

    // Writing
    return (
      <div className="grid grid-cols-3 gap-1.5">
        {exam.writing.section1.map((item) => {
          const val = (state.writingTransformations[item.number] || '').trim();
          const isMatch = isTransformationCorrect(val, item.acceptedAnswers);
          let cls = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
          if (revealAnswers) {
            cls = isMatch
              ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold'
              : 'bg-amber-50 border-amber-300 text-amber-900 font-semibold';
          } else if (val) {
            cls = 'bg-sky-700 border-sky-700 text-white font-semibold';
          }
          return (
            <button
              key={item.number}
              type="button"
              onClick={() => scrollToQuestion(`q-w-${item.number}`)}
              className={`h-9 rounded-md border font-mono tabular-nums text-xs transition-colors cursor-pointer ${cls}`}
            >
              Câu {item.number}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => scrollToQuestion('q-w-email')}
          className={`h-9 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
            state.writingEmail.trim().length > 0
              ? 'bg-sky-700 border-sky-700 text-white'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          Email
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Exam Bar: Back + Fixed 1-5 Exam Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="flex items-start sm:items-center gap-3">
          <button
            type="button"
            onClick={onBackOverview}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            aria-label="Quay lại danh sách bộ đề"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">{exam.title}</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{exam.subtitle}</p>
          </div>
        </div>

        {/* Fixed Order 1 -> 5 Selector */}
        <div
          role="group"
          aria-label="Chọn bộ đề từ 1 đến 5"
          className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto"
        >
          {EXAM_SETS.map((item) => {
            const active = item.id === exam.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectExam(item.id)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                  active
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Đề {item.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skill Switcher + Mobile Quick Tools */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="Chọn kỹ năng"
          className="grid grid-cols-3 sm:inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
        >
          <button
            role="tab"
            type="button"
            aria-selected={activeSkill === 'listening'}
            onClick={() => onChangeSkill('listening')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px] ${
              activeSkill === 'listening'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Nghe (20)
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={activeSkill === 'reading'}
            onClick={() => onChangeSkill('reading')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px] ${
              activeSkill === 'reading'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Đọc (30)
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={activeSkill === 'writing'}
            onClick={() => onChangeSkill('writing')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px] ${
              activeSkill === 'writing'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Viết (5 + Email)
          </button>
        </div>

        {/* Mobile Quick Controls */}
        <div className="flex lg:hidden items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg min-h-[42px] cursor-pointer"
          >
            <ListChecks className="w-4 h-4 text-sky-700" />
            <span className="font-mono tabular-nums">
              Tiến độ ({score.answeredCount}/{score.totalItems})
            </span>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg min-h-[42px] cursor-pointer whitespace-nowrap shrink-0"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{state.submitted ? 'Cập nhật điểm' : 'Nộp bài'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Control Panel */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-white border border-slate-200 rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">Bảng câu hỏi phần hiện tại</span>
            <span className="font-mono tabular-nums text-xs text-slate-600">
              Đồng hồ: {formatTimer(secondsLeft)}
            </span>
          </div>
          {renderNavigatorGrid()}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleToggleAnswerKey}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg min-h-[40px] cursor-pointer"
            >
              {state.showAnswerKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{state.showAnswerKey ? 'Ẩn đáp án' : 'Xem đáp án'}</span>
            </button>
            <button
              type="button"
              onClick={() => setTimerRunning((prev) => !prev)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg min-h-[40px] cursor-pointer"
            >
              {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{timerRunning ? 'Tạm dừng' : 'Bắt đầu giờ'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main 2-Zone Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Active Skill Content */}
        <div className="lg:col-span-8 space-y-8">
          {activeSkill === 'listening' && (
            <ListeningSection
              exam={exam}
              state={state}
              revealAnswers={revealAnswers}
              onSelectAnswer={handleListeningAnswer}
              onIncrementListen={handleIncrementListen}
              onResetListen={handleResetListen}
            />
          )}

          {activeSkill === 'reading' && (
            <ReadingSection
              exam={exam}
              state={state}
              revealAnswers={revealAnswers}
              onSelectAnswer={handleReadingAnswer}
            />
          )}

          {activeSkill === 'writing' && (
            <WritingSection
              exam={exam}
              state={state}
              revealAnswers={revealAnswers}
              onChangeTransformation={handleTransformationChange}
              onChangeEmail={handleEmailChange}
              onChangeRubric={handleRubricChange}
            />
          )}

          {/* Bottom Skill Transition Bar */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            {activeSkill === 'listening' ? (
              <span />
            ) : (
              <button
                type="button"
                onClick={() => onChangeSkill(activeSkill === 'writing' ? 'reading' : 'listening')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{activeSkill === 'writing' ? 'Quay lại Đọc' : 'Quay lại Nghe'}</span>
              </button>
            )}

            {activeSkill === 'writing' ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp bài &amp; Chấm điểm</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onChangeSkill(activeSkill === 'listening' ? 'reading' : 'writing')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <span>{activeSkill === 'listening' ? 'Sang phần Đọc' : 'Sang phần Viết'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Sticky Exam Deck (Desktop + Score Summary when submitted) */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
          {/* Score Summary Card (visible when submitted) */}
          {state.submitted && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                <div>
                  <p className="text-xs font-medium text-slate-500">Kết quả tạm tính</p>
                  <h3 className="text-base font-bold text-slate-900">Điểm Final ({exam.title})</h3>
                </div>
                <span className="font-mono tabular-nums text-2xl font-bold text-sky-700">
                  {score.finalScore.toFixed(2)}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Listening ({score.listeningCorrect}/{score.listeningTotal} câu)
                  </span>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {score.listeningScore.toFixed(2)} / 10
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Reading ({score.readingCorrect}/{score.readingTotal} câu)
                  </span>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {score.readingScore.toFixed(2)} / 7.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Writing (Câu: {score.writingS1Score.toFixed(1)} + Email: {score.writingEmailScore.toFixed(1)})
                  </span>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {score.writingScore.toFixed(2)} / 3.0
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Final = (Listening + Reading &amp; Writing) / 2. Phần Email bạn tự chấm theo rubric ở mục Viết.
              </p>
            </div>
          )}

          {/* Timer Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-sky-700" />
                <span>Đồng hồ làm bài</span>
              </div>
              <span
                className={`font-mono tabular-nums text-xl font-bold ${
                  secondsLeft <= 120 && timerRunning ? 'text-rose-700' : 'text-slate-900'
                }`}
              >
                {formatTimer(secondsLeft)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => switchTimerPreset('paper1')}
                className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  timerMode === 'paper1' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Nghe (20p)
              </button>
              <button
                type="button"
                onClick={() => switchTimerPreset('paper2')}
                className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  timerMode === 'paper2' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Đọc &amp; Viết (70p)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTimerRunning((prev) => !prev)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[40px]"
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{timerRunning ? 'Tạm dừng' : 'Bắt đầu'}</span>
              </button>
              <button
                type="button"
                onClick={() => switchTimerPreset(timerMode)}
                aria-label="Đặt lại đồng hồ"
                className="inline-flex items-center justify-center w-10 h-10 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question Navigator & Actions */}
          <div className="hidden lg:block bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Điều hướng câu hỏi</h3>
              <span className="font-mono tabular-nums text-xs text-slate-500">
                {score.answeredCount}/{score.totalItems} mục
              </span>
            </div>

            {renderNavigatorGrid()}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{state.submitted ? 'Chấm lại điểm' : 'Nộp bài & Chấm điểm'}</span>
              </button>

              <button
                type="button"
                onClick={handleToggleAnswerKey}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[40px]"
              >
                {state.showAnswerKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{state.showAnswerKey ? 'Ẩn đáp án tham khảo' : 'Xem đáp án tham khảo'}</span>
              </button>

              {!confirmReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer min-h-[38px]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xóa bài làm {exam.title}</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      onResetExam();
                      setConfirmReset(false);
                    }}
                    className="flex-1 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg cursor-pointer"
                  >
                    Xác nhận xóa
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    Hủy
                  </button>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
