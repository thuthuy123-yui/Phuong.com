import { ExternalLink, FileText, Headphones } from 'lucide-react';
import { AUDIO_SOURCE_LIST } from '../data/audioSources';

export function AudioDirectoryView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
      <div className="border-b border-slate-200 pb-4 space-y-1.5">
        <h1 className="text-2xl font-bold text-slate-900">Danh sách 12 nguồn Audio Listening</h1>
        <p className="text-sm text-slate-600">
          Toàn bộ audio được liên kết trực tiếp từ British Council LearnEnglish theo đúng nguồn trong tài liệu PDF gốc (bao gồm file nghe và transcript).
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100">
        {AUDIO_SOURCE_LIST.map((src, index) => (
          <div
            key={src.id}
            className="p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono tabular-nums text-xs font-semibold text-sky-700 pt-1">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-slate-900">{src.title}</p>
                <p className="text-xs text-slate-500">
                  British Council LearnEnglish · Trình độ {src.level}
                </p>
              </div>
            </div>

            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <Headphones className="w-4 h-4" />
              <span>Mở audio &amp; transcript</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-900">Tài liệu PDF gốc (34 trang)</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Bộ 5 đề luyện thi kết thúc học phần Tiếng Anh 1 kèm đáp án tham khảo.
          </p>
        </div>
        <a
          href="/assets/aistudio/5_de_luyen_thi_TA1_day_du_4_ky_nang_5cf14dff.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[42px]"
        >
          <FileText className="w-4 h-4" />
          <span>Xem / Tải PDF</span>
        </a>
      </div>
    </div>
  );
}

export function GuideView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
      <div className="border-b border-slate-200 pb-4 space-y-1.5">
        <h1 className="text-2xl font-bold text-slate-900">Hướng dẫn làm bài &amp; Cách tính điểm</h1>
        <p className="text-sm text-slate-600">
          Quy định luyện tập và thang điểm trích từ tài liệu Bộ 5 Đề Luyện Thi Tiếng Anh 1.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5">
          <h2 className="text-base font-bold text-slate-900">1. Cấu trúc mỗi bộ đề</h2>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>
              <strong className="text-slate-900">Paper 1 – Listening:</strong> 20 câu, 4 phần, thời gian khoảng 20 phút.
            </li>
            <li>
              <strong className="text-slate-900">Paper 2 – Reading &amp; Writing:</strong> tổng thời gian 70 phút.
            </li>
            <li>
              <strong className="text-slate-900">Reading (30 câu):</strong> Từ vựng – Ngữ pháp (1–10), Đọc thông báo (11–15), Đọc hiểu đoạn văn (16–20), Điền từ vào đoạn văn (21–30).
            </li>
            <li>
              <strong className="text-slate-900">Writing:</strong> 5 câu viết lại câu và 1 email khoảng 45 từ.
            </li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5">
          <h2 className="text-base font-bold text-slate-900">2. Hướng dẫn phần Nghe (Listening)</h2>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>Nhấn vào nút <strong>Mở audio</strong> trong từng câu/phần để nghe đúng bài nghe British Council LearnEnglish.</li>
            <li>Tự giới hạn mỗi audio ở <strong>2 lượt nghe</strong> (hệ thống tự đếm lượt 0/2 → 1/2 → 2/2).</li>
            <li>Không xem transcript hoặc đáp án trước khi làm xong bài.</li>
            <li>Nếu đã tải file MP3 về máy, bạn có thể bấm <strong>Phát file MP3</strong> để nghe ngay trong trang.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">3. Thang điểm &amp; Gợi ý chấm Writing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 leading-relaxed">
          <div className="space-y-1.5">
            <p>
              <strong className="text-slate-900">Listening:</strong> 10 điểm (20 câu × 0,5 điểm).
            </p>
            <p>
              <strong className="text-slate-900">Reading:</strong> 7,0 điểm (30 câu quy đổi thang 7,0).
            </p>
            <p>
              <strong className="text-slate-900">Writing:</strong> 3,0 điểm gồm:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sentence Transformation: 5 câu × 0,2 điểm = 1,0 điểm.</li>
              <li>Email Writing: 2,0 điểm (4 tiêu chí × 0,5 điểm).</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 flex flex-col justify-center">
            <p className="text-xs font-semibold text-slate-500">Công thức điểm tổng kết</p>
            <p className="mt-1 font-mono text-sm sm:text-base font-bold text-slate-900">
              Điểm Final = (Listening + Reading &amp; Writing) / 2
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Lưu ý nguồn: Audio là bài học nghe có sẵn trên British Council LearnEnglish. Câu hỏi luyện tập được biên soạn lại theo chủ đề/nội dung bài nghe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
