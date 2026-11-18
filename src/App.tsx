import { useEffect, useState } from 'react';
import { AudioDirectoryView, GuideView } from './components/AudioAndGuideViews';
import { ExamOverview } from './components/ExamOverview';
import { ExamWorkspace } from './components/ExamWorkspace';
import { AppView, Header } from './components/Header';
import { createEmptyExamState, EXAM_SETS } from './data/exams';
import { ExamState, SkillTab } from './types/exam';

const STORAGE_KEY = 'ta1_5_exams_progress_v1';

function loadInitialStates(): Record<number, ExamState> {
  const defaults: Record<number, ExamState> = {
    1: createEmptyExamState(),
    2: createEmptyExamState(),
    3: createEmptyExamState(),
    4: createEmptyExamState(),
    5: createEmptyExamState(),
  };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Record<string, Partial<ExamState>>;
    for (const exam of EXAM_SETS) {
      if (parsed[String(exam.id)]) {
        defaults[exam.id] = {
          ...createEmptyExamState(),
          ...parsed[String(exam.id)],
          emailRubric: {
            ...createEmptyExamState().emailRubric,
            ...(parsed[String(exam.id)]?.emailRubric || {}),
          },
        };
      }
    }
  } catch {
    // Ignore storage parse failures
  }

  return defaults;
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('overview');
  const [activeExamId, setActiveExamId] = useState<number>(1);
  const [activeSkill, setActiveSkill] = useState<SkillTab>('listening');
  const [examStates, setExamStates] = useState<Record<number, ExamState>>(loadInitialStates);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(examStates));
    } catch {
      // Ignore storage quota errors
    }
  }, [examStates]);

  const handleOpenExam = (examId: number, skill: SkillTab = 'listening') => {
    setActiveExamId(examId);
    setActiveSkill(skill);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExamInWorkspace = (examId: number) => {
    setActiveExamId(examId);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateExamState = (updater: (prev: ExamState) => ExamState) => {
    setExamStates((prev) => ({
      ...prev,
      [activeExamId]: updater(prev[activeExamId]),
    }));
  };

  const handleResetExam = () => {
    setExamStates((prev) => ({
      ...prev,
      [activeExamId]: createEmptyExamState(),
    }));
  };

  const activeExam = EXAM_SETS.find((e) => e.id === activeExamId) || EXAM_SETS[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header
        currentView={currentView}
        activeExamId={activeExamId}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectExam={(id) => handleOpenExam(id, activeSkill)}
      />

      <main className="flex-1">
        {currentView === 'overview' && (
          <ExamOverview
            examStates={examStates}
            onOpenExam={handleOpenExam}
            onOpenAudioDirectory={() => {
              setCurrentView('audio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'exam' && (
          <ExamWorkspace
            exam={activeExam}
            state={examStates[activeExam.id]}
            activeSkill={activeSkill}
            onChangeSkill={(skill) => {
              setActiveSkill(skill);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectExam={handleSelectExamInWorkspace}
            onBackOverview={() => {
              setCurrentView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onUpdateState={handleUpdateExamState}
            onResetExam={handleResetExam}
          />
        )}

        {currentView === 'audio' && <AudioDirectoryView />}
        {currentView === 'guide' && <GuideView />}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
          <p>Bộ 5 Đề Luyện Thi Kết Thúc Học Phần Tiếng Anh 1 · Cấu trúc cố định Đề 1 – Đề 5</p>
          <p>Audio nguồn: British Council LearnEnglish</p>
        </div>
      </footer>
    </div>
  );
}
