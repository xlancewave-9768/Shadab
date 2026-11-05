import React from 'react';
import { ArrowUp, Heart, Sparkles, Printer, MessageCircle, Share2 } from 'lucide-react';
import { biodata } from '../data/biodata';

interface FooterProps {
  onOpenPrint: () => void;
  onOpenWhatsApp: () => void;
  onReplayWelcome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrint,
  onOpenWhatsApp,
  onReplayWelcome,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051712] text-[#d6c59c] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#c9a45e]/30 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,164,94,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Emblem */}
        <div className="text-[#c9a45e] text-lg tracking-[0.3em] mb-4 select-none">
          ✧ ۞ ✧
        </div>

        {/* Sacred Quranic Ayat */}
        <div
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#fcedc7] leading-relaxed max-w-2xl mx-auto mb-3"
        >
          {biodata.quranVerseArabic}
        </div>

        {/* Translation */}
        <p className="text-xs sm:text-sm text-[#b9cbbd] italic max-w-xl mx-auto font-serif leading-relaxed mb-8">
          &ldquo;{biodata.quranVerseTranslation}&rdquo;
        </p>

        {/* Traditional Islamic Dua */}
        <div className="bg-[#0d2a21]/70 border border-[#c9a45e]/25 rounded-2xl p-5 max-w-lg mx-auto mb-10">
          <p className="text-xs text-[#eedcb4] font-medium leading-relaxed">
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="text-[11px] text-[#93a699] italic mt-1 font-serif">
            May Allah bless you and shower His blessings upon you and unite you both in goodness.
          </p>
        </div>

        {/* Quick Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#c5b89a] mb-8 font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#career" className="hover:text-white transition-colors">Career</a>
          <a href="#family" className="hover:text-white transition-colors">Family</a>
          <a href="#expectations" className="hover:text-white transition-colors">Expectations</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Action utility row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={onReplayWelcome}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#f5dfa3] border border-[#c9a45e]/40 hover:bg-[#12382c] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c9a45e]" />
            <span>Replay Welcome Intro</span>
          </button>

          <button
            onClick={onOpenPrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#f5dfa3] border border-[#c9a45e]/40 hover:bg-[#12382c] transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-[#c9a45e]" />
            <span>Printable Biodata</span>
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#09221a] bg-[#c9a45e] hover:bg-[#d9ae54] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#09221a]" />
            <span>WhatsApp Family</span>
          </button>
        </div>

        {/* Bottom divider & Back to top */}
        <div className="pt-8 border-t border-[#c9a45e]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a9d90]">
          <p>
            © {new Date().getFullYear()} Er. Shadab Anwar · Official Marriage Profile & Biodata.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 text-[#c9a45e] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#c9a45e] rounded px-2 py-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
