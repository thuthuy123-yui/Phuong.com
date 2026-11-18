import { CheckCircle2, Eye, EyeOff, Info } from 'lucide-react';
import { useState } from 'react';
import { EmailRubricScores, ExamSet, ExamState } from '../types/exam';
import { countWords, isTransformationCorrect } from '../utils/scoring';

interface WritingSectionProps {
  exam: ExamSet;
  state: ExamState;
  revealAnswers: boolean;
  onChangeTransformation: (number: number, value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeRubric: (rubric: EmailRubricScores) => void;
}

const RUBRIC_CRITERIA: {
  key: keyof EmailRubricScores;
  label: string;
  desc: string;
}[] = [
  {
    key: 'taskCompletion',
    label: 'Hoàn thành yêu cầu',
    desc: 'Trả lời đủ cả 3 ý đề bài yêu cầu, độ dài phù hợp (~45 từ).',
  },
  {
    key: 'organization',
    label: 'Bố cục & tổ chức nội dung',
    desc: 'Có lời chào, thân bài mạch lạc, lời kết/ký tên rõ ràng.',
  },
  {
    key: 'vocabulary',
    label: 'Từ vựng & diễn đạt',
    desc: 'Dùng từ tự nhiên, phù hợp ngữ cảnh giao tiếp thân mật.',
  },
  {
    key: 'grammar',
    label: 'Ngữ pháp & chính xác',
    desc: 'Đúng thì, cấu trúc câu và chính tả cơ bản.',
  },
];

export function WritingSection({
  exam,
  state,
  revealAnswers,
  onChangeTransformation,
  onChangeEmail,
  onChangeRubric,
}: WritingSectionProps) {
  const { writing } = exam;
  const [showSampleEmail, setShowSampleEmail] = useState(false);

  const wordCount = countWords(state.writingEmail);
  const targetWords = writing.section2.targetWords;
  const wordStatus =
    wordCount === 0
      ? 'Chưa viết'
      : wordCount < 35
      ? 'Hơi ngắn (nên viết khoảng 45 từ)'
      : wordCount <= 60
      ? 'Đạt độ dài phù hợp'
      : 'Hơi dài (có thể rút gọn quanh 45 từ)';

  const rubricTotal =
    state.emailRubric.taskCompletion +
    state.emailRubric.organization +
    state.emailRubric.vocabulary +
    state.emailRubric.grammar;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-medium text-sky-700">Paper 2 · Phần Viết (3,0 điểm)</p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          Writing — Viết lại câu &amp; Viết Email
        </h2>
      </div>

      {/* SECTION 1: Sentence Transformation */}
      <section aria-labelledby="writing-s1" className="space-y-4">
        <div>
          <h3 id="writing-s1" className="text-base sm:text-lg font-bold text-slate-900">
            Section 1 — Sentence Transformation (5 câu × 0,2 = 1,0 điểm)
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Finish each sentence so that it means exactly the same as the sentence printed before it.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 px-4 sm:px-5">
          {writing.section1.map((item) => {
            const val = state.writingTransformations[item.number] || '';
            const isMatch = isTransformationCorrect(val, item.acceptedAnswers);

            return (
              <div key={item.number} id={`q-w-${item.number}`} className="py-4 space-y-2.5">
                <p className="text-sm sm:text-base font-semibold text-slate-900">
                  <span className="font-mono tabular-nums text-sky-700 mr-2">{item.number}.</span>
                  {item.original}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:pl-6">
                  <span className="text-sm sm:text-base font-medium text-slate-700 whitespace-nowrap shrink-0">
                    → {item.starter}
                  </span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => onChangeTransformation(item.number, e.target.value)}
                    placeholder="Nhập phần tiếp theo của câu..."
                    aria-label={`Viết lại câu ${item.number}`}
                    className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border outline-none transition-colors min-h-[44px] ${
                      revealAnswers
                        ? isMatch
                          ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950'
                          : 'border-amber-300 bg-amber-50/40 text-slate-900'
                        : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-600'
                    }`}
                  />
                </div>

                {revealAnswers && (
                  <div className="sm:pl-6 text-xs space-y-1">
                    {isMatch ? (
                      <p className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Đúng cấu trúc gợi ý</span>
                      </p>
                    ) : (
                      <p className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                        <Info className="w-4 h-4 text-sky-700 shrink-0" />
                        <span>Chấp nhận cách viết tương đương nếu đúng cấu trúc và giữ nguyên nghĩa.</span>
                      </p>
                    )}
                    <p className="text-slate-700">
                      <span className="font-semibold">Đáp án gợi ý: </span>
                      {item.modelAnswer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Email Writing */}
      <section aria-labelledby="writing-s2" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="writing-s2" className="text-base sm:text-lg font-bold text-slate-900">
            Section 2 — Email Writing (2,0 điểm)
          </h3>
          <p className="mt-1 text-sm text-slate-600">Write about {targetWords} words.</p>
        </div>

        <div id="q-w-email" className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              {writing.section2.prompt}
            </p>
            <p className="text-xs font-medium text-slate-500">In your email, make sure you include:</p>
            <ul className="space-y-1 text-sm text-slate-700">
              {writing.section2.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="font-mono tabular-nums text-xs font-semibold text-sky-700">
                    0{idx + 1}.
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <textarea
              rows={7}
              value={state.writingEmail}
              onChange={(e) => onChangeEmail(e.target.value)}
              placeholder="Hi ...,&#10;&#10;Viết nội dung email của bạn tại đây (khoảng 45 từ)..."
              aria-label="Nội dung Email"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-600 p-3.5 text-sm sm:text-base text-slate-900 leading-relaxed outline-none transition-colors resize-y"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span className="font-mono tabular-nums font-medium">
                Số từ: <strong className="text-slate-900">{wordCount}</strong> / ~{targetWords} từ
              </span>
              <span className={wordCount >= 35 && wordCount <= 60 ? 'text-emerald-700 font-medium' : 'text-slate-500'}>
                {wordStatus}
              </span>
            </div>
          </div>

          {/* Rubric & Sample Answer when submitted / answer key enabled */}
          {revealAnswers && (
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Tự chấm điểm theo Rubric đề mẫu ({rubricTotal.toFixed(2)} / 2,00 điểm)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Mỗi tiêu chí tối đa 0,5 điểm theo thang chấm chính thức.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSampleEmail((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer min-h-[36px]"
                >
                  {showSampleEmail ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showSampleEmail ? 'Ẩn bài mẫu' : 'Xem bài mẫu gợi ý'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RUBRIC_CRITERIA.map((criterion) => {
                  const currentVal = state.emailRubric[criterion.key];
                  return (
                    <div
                      key={criterion.key}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-2"
                    >
                      <div>
                        <p className="text-xs font-semibold text-slate-900">{criterion.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{criterion.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {[0, 0.25, 0.5].map((scoreOpt) => (
                          <button
                            key={scoreOpt}
                            type="button"
                            onClick={() =>
                              onChangeRubric({
                                ...state.emailRubric,
                                [criterion.key]: scoreOpt,
                              })
                            }
                            className={`flex-1 py-1.5 rounded-md border font-mono tabular-nums text-xs font-semibold transition-colors cursor-pointer min-h-[36px] ${
                              currentVal === scoreOpt
                                ? 'bg-sky-700 border-sky-700 text-white'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {scoreOpt.toFixed(2).replace(/\.00$/, '.0')}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {showSampleEmail && (
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-700">Email tham khảo (~45 từ):</p>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-800 leading-relaxed">
                    {writing.section2.sampleAnswer}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
