import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { biodata } from '../data/biodata';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const enterButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      enterButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center overflow-y-auto"
        >
          {/* Backdrop with rich Islamic emerald & royal purple gradient */}
          <div className="fixed inset-0 bg-[#061713] bg-[radial-gradient(circle_at_25%_25%,#3a224a_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#114534_0%,transparent_55%),linear-gradient(135deg,#051511_0%,#0c2a21_60%,#1c1328_100%)]" />

          {/* Close button for accessibility */}
          <button
            onClick={onClose}
            aria-label="Skip intro and view profile"
            className="fixed top-5 right-5 z-20 text-[#e4bd70] hover:text-white p-2.5 rounded-full border border-[#e4bd70]/30 bg-[#0c2e24]/70 backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:ring-[#e4bd70] focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl mx-auto py-8 sm:py-12 px-6 sm:px-10 rounded-3xl border border-[#e4bd70]/40 bg-[#0b241c]/80 backdrop-blur-xl shadow-2xl shadow-black/60 my-auto"
          >
            {/* Top Ornamental Star */}
            <div className="text-[#e4bd70] text-xl tracking-[0.4em] select-none mb-3">
              ✦ ❖ ✦
            </div>

            {/* Arabic Bismillah */}
            <div
              dir="rtl"
              lang="ar"
              className="font-arabic text-3xl sm:text-4xl text-[#f5dfa3] drop-shadow-[0_2px_20px_rgba(228,189,112,0.4)] my-4 leading-relaxed"
            >
              {biodata.arabicBismillah}
            </div>

            <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#e4bd70] to-transparent my-4" />

            <p className="text-[11px] uppercase tracking-[0.25em] text-[#d6be8c] font-medium my-3">
              You Are Cordially Invited To Explore
            </p>

            <h2 id="welcome-title" className="font-serif text-3xl sm:text-4xl text-[#fbf6ec] font-normal mt-1">
              Welcome to the Marriage Biodata
            </h2>

            <div className="font-serif text-4xl sm:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#fff3d4] via-[#e4bd70] to-[#fff6e3] animate-shimmer-gold">
              {biodata.name}
            </div>

            <p className="text-xs sm:text-sm text-[#d0ded6] mt-4 max-w-md mx-auto leading-relaxed">
              &ldquo;A journey of faith, noble family values, and seeking a blessed partnership in accordance with Islamic tradition.&rdquo;
            </p>

            {/* Enter Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                ref={enterButtonRef}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#0c2e24] bg-gradient-to-r from-[#d9ae54] via-[#f7e2a9] to-[#c9a45e] hover:shadow-[0_0_35px_rgba(228,189,112,0.5)] transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span>EXPLORE PROFILE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-medium text-[#c5b493] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#e4bd70] focus-visible:outline-none"
              >
                Skip Intro
              </button>
            </div>

            <p className="text-[11px] text-[#91a69a] mt-6 tracking-wider">
              B.Tech Mechanical Engineer · Samastipur, Bihar
            </p>

            <div className="text-[#e4bd70] text-sm tracking-[0.3em] select-none mt-4">
              ✦ ❖ ✦
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
