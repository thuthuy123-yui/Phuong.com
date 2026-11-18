import { CheckCircle2, XCircle } from 'lucide-react';
import { ExamSet, ExamState } from '../types/exam';
import { AudioControl } from './AudioControl';

interface ListeningSectionProps {
  exam: ExamSet;
  state: ExamState;
  revealAnswers: boolean;
  onSelectAnswer: (questionNumber: number, option: string) => void;
  onIncrementListen: (slotKey: string) => void;
  onResetListen: (slotKey: string) => void;
}

export function ListeningSection({
  exam,
  state,
  revealAnswers,
  onSelectAnswer,
  onIncrementListen,
  onResetListen,
}: ListeningSectionProps) {
  const { listening } = exam;

  const renderFeedback = (qNumber: number, correctAnswer: string, note?: string) => {
    if (!revealAnswers) return null;
    const selected = state.listeningAnswers[qNumber];
    const isCorrect = selected === correctAnswer;

    return (
      <div className="mt-3 space-y-1">
        <div
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
            isCorrect ? 'text-emerald-700' : 'text-rose-700'
          }`}
        >
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Chính xác ({correctAnswer})</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4 shrink-0" />
              <span>
                {selected ? `Bạn chọn ${selected} · ` : 'Chưa chọn · '}
                Đáp án đúng: {correctAnswer}
              </span>
            </>
          )}
        </div>
        {note && <p className="text-xs text-slate-500">{note}</p>}
      </div>
    );
  };

  return (
    <div className="space-y-10">
      {/* Paper Header */}
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-medium text-sky-700">Paper 1 · Khoảng {listening.durationMinutes} phút</p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          Listening — 20 câu (4 phần)
        </h2>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          Mỗi đoạn audio chỉ nên nghe tối đa 2 lượt. Nhấn &ldquo;Mở audio&rdquo; để nghe trực tiếp từ nguồn British Council LearnEnglish, hoặc tải file MP3 về để phát ngay trên trang.
        </p>
      </div>

      {/* PART 1 */}
      <section aria-labelledby="listening-part-1" className="space-y-5">
        <div>
          <h3 id="listening-part-1" className="text-base sm:text-lg font-bold text-slate-900">
            Part 1 — Questions 1–5
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            You will hear five short conversations. Open the linked audio for each question.
          </p>
        </div>

        <div className="space-y-6">
          {listening.part1.map((q) => {
            const slotKey = `e${exam.id}-p1-q${q.number}`;
            const selected = state.listeningAnswers[q.number];
            return (
              <div
                key={q.number}
                id={`q-l-${q.number}`}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4"
              >
                <AudioControl
                  title={q.audioTitle}
                  audioId={q.audioId}
                  listenCount={state.audioListens[slotKey] || 0}
                  onIncrementListen={() => onIncrementListen(slotKey)}
                  onResetListen={() => onResetListen(slotKey)}
                />

                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                    {q.prompt}
                  </p>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = selected === opt.letter;
                      const isAnswer = q.answer === opt.letter;

                      let btnStyle =
                        'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50';
                      if (revealAnswers) {
                        if (isAnswer) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                        } else if (isSelected && !isAnswer) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-sky-50 border-sky-600 text-sky-900 font-semibold';
                      }

                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          onClick={() => onSelectAnswer(q.number, opt.letter)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer min-h-[44px] flex items-center gap-2.5 ${btnStyle}`}
                        >
                          <span className="font-mono tabular-nums text-xs font-bold shrink-0 w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                            {opt.letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {renderFeedback(q.number, q.answer)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PART 2 */}
      <section aria-labelledby="listening-part-2" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="listening-part-2" className="text-base sm:text-lg font-bold text-slate-900">
            Part 2 — Questions 6–10
          </h3>
          <p className="mt-1 text-sm text-slate-600">{listening.part2.instruction}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-5">
          <AudioControl
            title={listening.part2.audioTitle}
            audioId={listening.part2.audioId}
            listenCount={state.audioListens[`e${exam.id}-p2`] || 0}
            onIncrementListen={() => onIncrementListen(`e${exam.id}-p2`)}
            onResetListen={() => onResetListen(`e${exam.id}-p2`)}
          />

          {/* Option bank reference */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-3.5">
            <p className="text-xs font-semibold text-slate-600 mb-2">
              Danh sách thông tin (A – E)
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-slate-800">
              {listening.part2.options.map((opt) => (
                <li key={opt.letter} className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-sky-700 shrink-0">{opt.letter}.</span>
                  <span>{opt.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="divide-y divide-slate-100">
            {listening.part2.questions.map((q) => {
              const selected = state.listeningAnswers[q.number] || '';
              return (
                <div
                  key={q.number}
                  id={`q-l-${q.number}`}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col gap-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                      <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                      {q.prompt}
                    </p>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {listening.part2.options.map((opt) => {
                        const isSelected = selected === opt.letter;
                        const isAnswer = q.answer === opt.letter;

                        let btnStyle =
                          'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                        if (revealAnswers) {
                          if (isAnswer) {
                            btnStyle = 'bg-emerald-600 border-emerald-600 text-white';
                          } else if (isSelected && !isAnswer) {
                            btnStyle = 'bg-rose-600 border-rose-600 text-white';
                          }
                        } else if (isSelected) {
                          btnStyle = 'bg-sky-700 border-sky-700 text-white';
                        }

                        return (
                          <button
                            key={opt.letter}
                            type="button"
                            onClick={() => onSelectAnswer(q.number, opt.letter)}
                            title={opt.text}
                            className={`w-11 h-11 rounded-lg border font-mono text-sm font-semibold transition-colors cursor-pointer ${btnStyle}`}
                          >
                            {opt.letter}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {renderFeedback(q.number, q.answer, q.note)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PART 3 */}
      <section aria-labelledby="listening-part-3" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="listening-part-3" className="text-base sm:text-lg font-bold text-slate-900">
            Part 3 — Questions 11–15
          </h3>
          <p className="mt-1 text-sm text-slate-600">{listening.part3.instruction}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-5">
          <AudioControl
            title={listening.part3.audioTitle}
            audioId={listening.part3.audioId}
            listenCount={state.audioListens[`e${exam.id}-p3`] || 0}
            onIncrementListen={() => onIncrementListen(`e${exam.id}-p3`)}
            onResetListen={() => onResetListen(`e${exam.id}-p3`)}
          />

          <div className="divide-y divide-slate-100">
            {listening.part3.questions.map((q) => {
              const selected = state.listeningAnswers[q.number];
              return (
                <div key={q.number} id={`q-l-${q.number}`} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                    {q.prompt}
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = selected === opt.letter;
                      const isAnswer = q.answer === opt.letter;

                      let btnStyle =
                        'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50';
                      if (revealAnswers) {
                        if (isAnswer) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                        } else if (isSelected && !isAnswer) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-sky-50 border-sky-600 text-sky-900 font-semibold';
                      }

                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          onClick={() => onSelectAnswer(q.number, opt.letter)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer min-h-[44px] flex items-center gap-2.5 ${btnStyle}`}
                        >
                          <span className="font-mono tabular-nums text-xs font-bold shrink-0 w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                            {opt.letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                  {renderFeedback(q.number, q.answer)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PART 4 */}
      <section aria-labelledby="listening-part-4" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="listening-part-4" className="text-base sm:text-lg font-bold text-slate-900">
            Part 4 — Questions 16–20
          </h3>
          <p className="mt-1 text-sm text-slate-600">{listening.part4.instruction}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-5">
          <AudioControl
            title={listening.part4.audioTitle}
            audioId={listening.part4.audioId}
            listenCount={state.audioListens[`e${exam.id}-p4`] || 0}
            onIncrementListen={() => onIncrementListen(`e${exam.id}-p4`)}
            onResetListen={() => onResetListen(`e${exam.id}-p4`)}
          />

          <div className="divide-y divide-slate-100">
            {listening.part4.questions.map((q) => {
              const selected = state.listeningAnswers[q.number];
              return (
                <div key={q.number} id={`q-l-${q.number}`} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                    {q.prompt}
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = selected === opt.letter;
                      const isAnswer = q.answer === opt.letter;

                      let btnStyle =
                        'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50';
                      if (revealAnswers) {
                        if (isAnswer) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                        } else if (isSelected && !isAnswer) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-sky-50 border-sky-600 text-sky-900 font-semibold';
                      }

                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          onClick={() => onSelectAnswer(q.number, opt.letter)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer min-h-[44px] flex items-center gap-2.5 ${btnStyle}`}
                        >
                          <span className="font-mono tabular-nums text-xs font-bold shrink-0 w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                            {opt.letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                  {renderFeedback(q.number, q.answer)}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
