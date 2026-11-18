import { Fragment, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { ExamSet, ExamState } from '../types/exam';
import { isReadingBlankCorrect } from '../utils/scoring';

interface ReadingSectionProps {
  exam: ExamSet;
  state: ExamState;
  revealAnswers: boolean;
  onSelectAnswer: (questionNumber: number, value: string) => void;
}

export function ReadingSection({
  exam,
  state,
  revealAnswers,
  onSelectAnswer,
}: ReadingSectionProps) {
  const { reading } = exam;
  const [focusedBlank, setFocusedBlank] = useState<number>(21);

  const renderFeedback = (qNumber: number, correctAnswer: string) => {
    if (!revealAnswers) return null;
    const selected = state.readingAnswers[qNumber];
    const isCorrect = selected === correctAnswer;

    return (
      <div
        className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold ${
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
    );
  };

  // Parse Section 4 passage into text and {{number}} tokens
  const passageParts = reading.section4.passageWithBlanks.split(/(\{\{\d+\}\})/g);

  const handleWordBankClick = (word: string) => {
    const target = focusedBlank >= 21 && focusedBlank <= 30 ? focusedBlank : 21;
    onSelectAnswer(target, word);
    // Move focus to next empty blank after target
    for (let next = target + 1; next <= 30; next++) {
      if (!state.readingAnswers[next]) {
        setFocusedBlank(next);
        return;
      }
    }
    if (target < 30) {
      setFocusedBlank(target + 1);
    }
  };

  return (
    <div className="space-y-10">
      {/* Paper Header */}
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-medium text-sky-700">
          Paper 2 · Phần Đọc (30 câu) trong tổng {reading.durationMinutes} phút Đọc &amp; Viết
        </p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          Reading — 30 câu (4 phần)
        </h2>
      </div>

      {/* SECTION 1: Questions 1-10 */}
      <section aria-labelledby="reading-s1" className="space-y-4">
        <div>
          <h3 id="reading-s1" className="text-base sm:text-lg font-bold text-slate-900">
            Section 1 — Questions 1–10
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Choose the letter next to the word or phrase which best completes each sentence (A, B, C or D).
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 px-4 sm:px-5">
          {reading.section1.map((q) => {
            const selected = state.readingAnswers[q.number];
            return (
              <div key={q.number} id={`q-r-${q.number}`} className="py-4">
                <p className="text-sm sm:text-base font-semibold text-slate-900">
                  <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                  {q.prompt}
                </p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
                        className={`w-full text-left px-3 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer min-h-[44px] flex items-center gap-2 ${btnStyle}`}
                      >
                        <span className="font-mono tabular-nums text-xs font-bold shrink-0 w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                          {opt.letter}
                        </span>
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
                {renderFeedback(q.number, q.answer)}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Questions 11-15 */}
      <section aria-labelledby="reading-s2" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="reading-s2" className="text-base sm:text-lg font-bold text-slate-900">
            Section 2 — Questions 11–15
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Look at the text in each question. What does it say? Choose the correct explanation A, B or C.
          </p>
        </div>

        <div className="space-y-4">
          {reading.section2.map((q) => {
            const selected = state.readingAnswers[q.number];
            return (
              <div
                key={q.number}
                id={`q-r-${q.number}`}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono tabular-nums text-sm font-bold text-sky-700 pt-2">
                    {q.number}.
                  </span>
                  <div className="flex-1 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm sm:text-base font-medium text-slate-900">
                    {q.prompt}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:pl-7">
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
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                  {renderFeedback(q.number, q.answer)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Questions 16-20 */}
      <section aria-labelledby="reading-s3" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="reading-s3" className="text-base sm:text-lg font-bold text-slate-900">
            Section 3 — Questions 16–20
          </h3>
          <p className="mt-1 text-sm text-slate-600">Read the text and choose the correct answer A, B, C or D.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Passage */}
          <article className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 lg:sticky lg:top-20">
            <h4 className="text-lg font-bold text-slate-900">{reading.section3.title}</h4>
            <p className="mt-3 text-sm sm:text-[15px] leading-7 text-slate-700">
              {reading.section3.passage}
            </p>
          </article>

          {/* Questions 16-20 */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 px-4 sm:px-5">
            {reading.section3.questions.map((q) => {
              const selected = state.readingAnswers[q.number];
              return (
                <div key={q.number} id={`q-r-${q.number}`} className="py-4">
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    <span className="font-mono tabular-nums text-sky-700 mr-2">{q.number}.</span>
                    {q.prompt}
                  </p>
                  <div className="mt-3 space-y-2">
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
                          <span>{opt.text}</span>
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

      {/* SECTION 4: Questions 21-30 */}
      <section aria-labelledby="reading-s4" className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 id="reading-s4" className="text-base sm:text-lg font-bold text-slate-900">
            Section 4 — Questions 21–30
          </h3>
          <p className="mt-1 text-sm text-slate-600">{reading.section4.instruction}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-5">
          {/* Interactive Word Bank */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-3.5 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <p className="text-xs font-semibold text-slate-700">
                Ngân hàng từ gợi ý (chạm ô trống số {focusedBlank} rồi chọn từ, hoặc gõ trực tiếp):
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {reading.section4.wordBank.map((word, idx) => {
                const usedCount = Object.entries(state.readingAnswers).filter(
                  ([k, v]) => Number(k) >= 21 && Number(k) <= 30 && v.trim().toLowerCase() === word.toLowerCase()
                ).length;

                return (
                  <button
                    key={`${word}-${idx}`}
                    type="button"
                    onClick={() => handleWordBankClick(word)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors cursor-pointer min-h-[38px] ${
                      usedCount > 0
                        ? 'bg-sky-50 border-sky-300 text-sky-900'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
            {reading.section4.note && (
              <p className="mt-2.5 text-xs text-slate-500">{reading.section4.note}</p>
            )}
          </div>

          {/* Passage with inline inputs */}
          <div className="text-sm sm:text-[15px] leading-9 text-slate-800">
            {passageParts.map((part, index) => {
              const match = part.match(/^\{\{(\d+)\}\}$/);
              if (!match) {
                return <Fragment key={index}>{part}</Fragment>;
              }
              const qNum = Number(match[1]);
              const value = state.readingAnswers[qNum] || '';
              const expected = reading.section4.answers[qNum] || '';
              const isCorrect = isReadingBlankCorrect(value, expected);
              const isFocused = focusedBlank === qNum;

              let inputStyle = 'border-slate-300 bg-slate-50 text-slate-900 focus:border-sky-600 focus:bg-white';
              if (revealAnswers) {
                inputStyle = isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                  : 'border-rose-400 bg-rose-50 text-rose-900';
              } else if (isFocused) {
                inputStyle = 'border-sky-600 bg-sky-50/50 text-slate-900 ring-2 ring-sky-200';
              }

              return (
                <span key={qNum} id={`q-r-${qNum}`} className="inline-flex items-center gap-1 mx-1 align-baseline">
                  <span className="font-mono tabular-nums text-xs font-semibold text-sky-700">
                    ({qNum})
                  </span>
                  <input
                    type="text"
                    value={value}
                    onFocus={() => setFocusedBlank(qNum)}
                    onChange={(e) => onSelectAnswer(qNum, e.target.value)}
                    placeholder="..."
                    aria-label={`Câu ${qNum}`}
                    className={`w-28 sm:w-32 px-2.5 py-1 text-sm rounded-md border outline-none transition-colors ${inputStyle}`}
                  />
                </span>
              );
            })}
          </div>

          {/* Answer Grid Summary for Section 4 when revealed */}
          {revealAnswers && (
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-2.5">Đáp án Section 4 (21–30):</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {Array.from({ length: 10 }, (_, i) => i + 21).map((num) => {
                  const userVal = state.readingAnswers[num] || '';
                  const expected = reading.section4.answers[num];
                  const ok = isReadingBlankCorrect(userVal, expected);
                  return (
                    <div
                      key={num}
                      className={`px-3 py-2 rounded-lg border text-xs ${
                        ok
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-rose-50 border-rose-200 text-rose-900'
                      }`}
                    >
                      <span className="font-mono tabular-nums font-bold mr-1">{num}.</span>
                      <span className="font-semibold">{expected}</span>
                      {!ok && userVal && (
                        <span className="block text-[11px] opacity-80 mt-0.5">Bạn điền: {userVal}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
