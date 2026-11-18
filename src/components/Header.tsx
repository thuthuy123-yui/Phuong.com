import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type AppView = 'overview' | 'exam' | 'audio' | 'guide';

interface HeaderProps {
  currentView: AppView;
  activeExamId: number;
  onNavigate: (view: AppView) => void;
  onSelectExam: (examId: number) => void;
}

export function Header({
  currentView,
  activeExamId,
  onNavigate,
  onSelectExam,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppView; label: string }[] = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'exam', label: 'Làm bài thi' },
    { id: 'audio', label: 'Nguồn Audio' },
    { id: 'guide', label: 'Hướng dẫn' },
  ];

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('overview')}
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors cursor-pointer"
        >
          Luyện Thi Tiếng Anh 1
        </button>

        {/* Zone 2: Concise single-line nav links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                  active
                    ? 'text-slate-900 border-sky-700 font-semibold'
                    : 'border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              onSelectExam(activeExamId);
              setMobileMenuOpen(false);
            }}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
          >
            {currentView === 'exam' ? `Đang mở Đề ${activeExamId}` : `Mở Đề ${activeExamId}`}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-2">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navItems.map((item) => {
              const active = currentView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`py-3 text-left text-sm font-medium min-h-[44px] cursor-pointer ${
                    active ? 'text-sky-700 font-semibold' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
