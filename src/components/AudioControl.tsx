import { useRef, useState } from 'react';
import { ExternalLink, Headphones, RotateCcw, Upload } from 'lucide-react';
import { AUDIO_SOURCES } from '../data/audioSources';
import { AudioSourceId } from '../types/exam';

interface AudioControlProps {
  title: string;
  audioId: AudioSourceId;
  listenCount: number;
  onIncrementListen: () => void;
  onResetListen: () => void;
}

export function AudioControl({
  title,
  audioId,
  listenCount,
  onIncrementListen,
  onResetListen,
}: AudioControlProps) {
  const source = AUDIO_SOURCES[audioId];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [localAudioUrl, setLocalAudioUrl] = useState<string | null>(null);
  const [localFileName, setLocalFileName] = useState<string | null>(null);
  const hasPlayedLocalRef = useRef(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (localAudioUrl) {
      URL.revokeObjectURL(localAudioUrl);
    }
    const url = URL.createObjectURL(file);
    setLocalAudioUrl(url);
    setLocalFileName(file.name);
    hasPlayedLocalRef.current = false;
  };

  const handleLocalPlay = () => {
    if (!hasPlayedLocalRef.current) {
      hasPlayedLocalRef.current = true;
      onIncrementListen();
    }
  };

  const handleLocalEnded = () => {
    hasPlayedLocalRef.current = false;
  };

  const limitReached = listenCount >= 2;

  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Headphones className="w-4 h-4 text-sky-700 shrink-0" />
            <span className="truncate">{title}</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
            <span>British Council LearnEnglish ({source.level})</span>
            <span aria-hidden="true">·</span>
            <span
              className={`font-mono tabular-nums font-medium ${
                limitReached ? 'text-amber-700' : 'text-slate-700'
              }`}
            >
              Lượt nghe: {listenCount}/2
            </span>
            {limitReached && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-700 font-medium">Đã đạt giới hạn 2 lượt nghe</span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onIncrementListen}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Mở audio</span>
          </a>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Nếu đã tải file MP3 từ British Council, bạn có thể phát trực tiếp tại đây"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Phát file MP3</span>
          </button>

          {listenCount > 0 && (
            <button
              type="button"
              onClick={onResetListen}
              title="Đặt lại bộ đếm lượt nghe"
              className="inline-flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Đặt lại lượt nghe"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {localAudioUrl && (
        <div className="pt-2 border-t border-slate-200 space-y-1.5">
          <p className="text-xs text-slate-500 truncate">Đang phát: {localFileName}</p>
          <audio
            controls
            src={localAudioUrl}
            onPlay={handleLocalPlay}
            onEnded={handleLocalEnded}
            className="w-full h-10"
          />
        </div>
      )}
    </div>
  );
}
