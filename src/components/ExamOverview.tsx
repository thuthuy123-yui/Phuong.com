import { ArrowRight, BookOpen, FileText, Headphones, PenLine } from 'lucide-react';
import { EXAM_SETS } from '../data/exams';
import { ExamState, SkillTab } from '../types/exam';
import { calculateExamScore } from '../utils/scoring';

interface ExamOverviewProps {
  examStates: Record<number, ExamState>;
  onOpenExam: (examId: number, skill?: SkillTab) => void;
  onOpenAudioDirectory: () => void;
}

export function ExamOverview({
  examStates,
  onOpenExam,
  onOpenAudioDirectory,
}: ExamOverviewProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Hero Intro */}
      <section className="max-w-3xl space-y-4">
        <p className="text-xs sm:text-sm font-semibold text-sky-700">
          Luyện thi kết thúc học phần · 5 bộ đề chuẩn không đảo trộn
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
          Bộ 5 Đề Luyện Thi Tiếng Anh 1
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Mỗi bộ đề giữ nguyên cấu trúc và thứ tự từ tài liệu gốc, gồm đầy đủ 3 phần:
          Nghe (20 câu kèm liên kết audio British Council), Đọc (30 câu) và Viết (5 câu viết lại câu + 1 email ~45 từ).
        </p>

        <div className="pt-1 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenExam(1, 'listening')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer min-h-[44px]"
          >
            <span>Bắt đầu Đề số 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenAudioDirectory}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[44px]"
          >
            <Headphones className="w-4 h-4 text-sky-700" />
            <span>Danh sách 12 nguồn Audio</span>
          </button>

          <a
            href="/assets/aistudio/5_de_luyen_thi_TA1_day_du_4_ky_nang_5cf14dff.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline min-h-[44px]"
          >
            <FileText className="w-4 h-4" />
            <span>Mở file PDF gốc</span>
          </a>
        </div>
      </section>

      {/* Structure Strip */}
      <section aria-label="Cấu trúc mỗi bộ đề" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Headphones className="w-4 h-4 text-sky-700" />
            <span>Paper 1 · Listening</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            20 câu (4 phần) · khoảng 20 phút · giới hạn 2 lượt nghe mỗi audio · thang điểm 10.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <BookOpen className="w-4 h-4 text-sky-700" />
            <span>Paper 2 · Reading</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            30 câu (Ngữ pháp, Thông báo, Đọc hiểu, Điền từ) · thang điểm 7,0.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <PenLine className="w-4 h-4 text-sky-700" />
            <span>Paper 2 · Writing</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            5 câu viết lại câu (1,0đ) + 1 email ~45 từ (2,0đ) · tổng 70 phút cho Paper 2.
          </p>
        </div>
      </section>

      {/* 5 Fixed Exam Sets */}
      <section aria-labelledby="exam-list-heading" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="exam-list-heading" className="text-xl font-bold text-slate-900">
            Chọn bộ đề luyện tập (Đề 1 – Đề 5)
          </h2>
          <span className="text-xs text-slate-500">Tự động lưu tiến độ trên thiết bị</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXAM_SETS.map((exam) => {
            const st = examStates[exam.id];
            const score = calculateExamScore(exam, st);
            const pct = Math.round((score.answeredCount / score.totalItems) * 100);

            return (
              <article
                key={exam.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between gap-5 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{exam.title}</h3>
                    {st.submitted ? (
                      <span className="font-mono tabular-nums text-sm font-bold text-emerald-700">
                        {score.finalScore.toFixed(2)} đ
                      </span>
                    ) : (
                      <span className="font-mono tabular-nums text-xs font-medium text-slate-500">
                        {score.answeredCount}/{score.totalItems} mục
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500">
                    Nghe: 20 câu · Đọc: 30 câu · Viết: 5 câu + Email
                  </p>

                  {/* Thin Progress Bar */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-700 transition-all duration-200"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono tabular-nums">
                      {st.submitted
                        ? `Đã nộp · Nghe ${score.listeningCorrect}/20 · Đọc ${score.readingCorrect}/30`
                        : pct > 0
                        ? `Đang làm dở (${pct}%)`
                        : 'Chưa làm'}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => onOpenExam(exam.id, 'listening')}
                      className="py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[38px]"
                    >
                      Nghe
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenExam(exam.id, 'reading')}
                      className="py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[38px]"
                    >
                      Đọc
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenExam(exam.id, 'writing')}
                      className="py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer min-h-[38px]"
                    >
                      Viết
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenExam(exam.id, 'listening')}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer min-h-[42px]"
                  >
                    <span>{score.answeredCount > 0 ? 'Tiếp tục làm đề' : 'Mở đề thi'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
