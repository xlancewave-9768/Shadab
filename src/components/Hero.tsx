import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageCircle, FileText, Sparkles, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { biodata } from '../data/biodata';
import { HeroParticles } from './HeroParticles';

interface HeroProps {
  onOpenPrint: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrint, onOpenWhatsApp }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 bg-[#071d18]"
    >
      {/* Background radial gradients for regal emerald depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(28,95,72,0.45),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(73,48,95,0.25),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#061713_0%,#0e3025_45%,#0b231b_100%)] -z-10" />

      {/* Islamic Geometric subtle watermark border pattern (pure vector SVG) */}
      <svg
        className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-[#c9a45e]/10 pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" strokeDasharray="2 3" />
        <circle cx="50" cy="50" r="38" />
        <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        <polygon points="50,5 61,39 95,50 61,61 50,95 39,61 5,50 39,39" />
      </svg>

      {/* Floating Canvas Particles */}
      <HeroParticles />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Bismillah Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a45e]/30 bg-[#0c2e24]/60 backdrop-blur-sm shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f5dfa3]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#e8cf99] font-medium">
              A Sacred Union · Marriage Profile
            </span>
          </div>

          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#fcedc7] drop-shadow-[0_2px_15px_rgba(201,164,94,0.35)] leading-relaxed select-none"
          >
            {biodata.arabicBismillah}
          </p>
          <p className="text-xs sm:text-sm text-[#c8d4ce] italic mt-1 font-serif tracking-wide">
            &ldquo;{biodata.bismillahTranslation}&rdquo;
          </p>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#fdf9f0] leading-[1.1]">
            <span className="animate-shimmer-gold block">
              {biodata.name}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-[#d8c397] font-serif text-lg sm:text-xl">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a45e]" />
            <span>{biodata.designation}</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a45e]" />
          </div>

          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-2 text-xs sm:text-sm text-[#b8cbbf] max-w-2xl mx-auto pt-2">
            <span className="inline-flex items-center gap-1 text-[#f3eedd]">
              <GraduationCap className="w-3.5 h-3.5 text-[#c9a45e]" />
              B.Tech Mechanical Engineering (2020)
            </span>
            <span aria-hidden="true" className="text-[#c9a45e]/60">·</span>
            <span className="inline-flex items-center gap-1 text-[#f3eedd]">
              <Briefcase className="w-3.5 h-3.5 text-[#c9a45e]" />
              YAMAN Industry Pvt. Ltd. (Faridabad)
            </span>
            <span aria-hidden="true" className="text-[#c9a45e]/60">·</span>
            <span className="inline-flex items-center gap-1 text-[#f3eedd]">
              <MapPin className="w-3.5 h-3.5 text-[#c9a45e]" />
              Samastipur, Bihar
            </span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8"
        >
          <a
            href="#about"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#0c2e24] bg-gradient-to-r from-[#e7c77c] via-[#f5dfa3] to-[#c9a45e] hover:shadow-[0_0_25px_rgba(201,164,94,0.4)] transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Explore Full Profile
          </a>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#fdf8ee] bg-[#143d30] border border-[#c9a45e]/50 hover:bg-[#1b503f] hover:border-[#c9a45e] transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none"
          >
            <MessageCircle className="w-4 h-4 text-[#73e098]" />
            <span>Connect on WhatsApp</span>
          </button>

          <button
            onClick={onOpenPrint}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#e4d4b1] border border-[#c9a45e]/30 hover:bg-[#113127] hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none"
          >
            <FileText className="w-4 h-4 text-[#c9a45e]" />
            <span>View Printable Biodata</span>
          </button>
        </motion.div>

        {/* 4-Item Quick Overview Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mt-12 pt-8 border-t border-[#c9a45e]/20"
        >
          <div className="bg-[#0e3227]/80 border border-[#c9a45e]/20 rounded-xl p-3 sm:p-4 text-left backdrop-blur-sm hover:border-[#c9a45e]/40 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-[#9db4a7] block font-medium">Age & Height</span>
            <span className="text-sm sm:text-base font-semibold text-[#f7eed8] mt-0.5 block">
              29 Yrs · 5&apos;5&quot;
            </span>
          </div>

          <div className="bg-[#0e3227]/80 border border-[#c9a45e]/20 rounded-xl p-3 sm:p-4 text-left backdrop-blur-sm hover:border-[#c9a45e]/40 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-[#9db4a7] block font-medium">Education</span>
            <span className="text-sm sm:text-base font-semibold text-[#f7eed8] mt-0.5 block truncate" title="B.Tech Mechanical Engineering">
              B.Tech Mechanical
            </span>
          </div>

          <div className="bg-[#0e3227]/80 border border-[#c9a45e]/20 rounded-xl p-3 sm:p-4 text-left backdrop-blur-sm hover:border-[#c9a45e]/40 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-[#9db4a7] block font-medium">Occupation</span>
            <span className="text-sm sm:text-base font-semibold text-[#f7eed8] mt-0.5 block truncate" title="Design Engineer at YAMAN Industry">
              Design Engineer
            </span>
          </div>

          <div className="bg-[#0e3227]/80 border border-[#c9a45e]/20 rounded-xl p-3 sm:p-4 text-left backdrop-blur-sm hover:border-[#c9a45e]/40 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-[#9db4a7] block font-medium">Native Place</span>
            <span className="text-sm sm:text-base font-semibold text-[#f7eed8] mt-0.5 block truncate" title="Samastipur, Bihar">
              Samastipur, Bihar
            </span>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="mt-10 text-[#c9a45e] hover:text-[#f3dd9b] transition-colors focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none rounded-full p-2"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};
