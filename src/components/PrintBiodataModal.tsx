import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Share2 } from 'lucide-react';
import { biodata } from '../data/biodata';

interface PrintBiodataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintBiodataModal: React.FC<PrintBiodataModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Er. Shadab Anwar | Marriage Biodata",
          text: "Formal Marriage Biodata of Er. Shadab Anwar (B.Tech Mechanical Engineer)",
          url: window.location.href,
        });
      } catch {
        // Cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-[#c9a45e]/50"
          >
            {/* Header / Actions toolbar */}
            <div className="no-print bg-[#0c2e24] text-white px-6 py-4 flex items-center justify-between border-b border-[#c9a45e]/30">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-[#f5dfa3]" />
                <span className="font-serif text-lg font-bold text-[#fdf8ee]">
                  Formal Marriage Biodata Document
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#f5dfa3] border border-[#c9a45e]/40 hover:bg-[#164234] transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-[#0c2e24] bg-gradient-to-r from-[#d9ae54] to-[#f5dfa3] hover:from-[#c9a45e] hover:to-[#b38728] shadow-sm transition-all flex items-center gap-1.5 print-include"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close document"
                  className="p-1.5 text-white/70 hover:text-white rounded-lg transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Body */}
            <div className="overflow-y-auto p-6 sm:p-10 bg-[#fffef9] text-[#1a2e25]">
              {/* Printable Biodata Sheet */}
              <div className="print-page border-2 border-[#c9a45e]/50 p-6 sm:p-8 rounded-xl bg-white shadow-sm relative">
                {/* Decorative Islamic Corner Florets */}
                <span className="absolute top-2 left-2 text-[#c9a45e] text-xs">✧</span>
                <span className="absolute top-2 right-2 text-[#c9a45e] text-xs">✧</span>
                <span className="absolute bottom-2 left-2 text-[#c9a45e] text-xs">✧</span>
                <span className="absolute bottom-2 right-2 text-[#c9a45e] text-xs">✧</span>

                {/* Document Top Bismillah */}
                <div className="text-center pb-4 border-b border-[#ebdcc3]">
                  <p dir="rtl" lang="ar" className="font-arabic text-2xl sm:text-3xl text-[#1a4d3c] mb-1">
                    {biodata.arabicBismillah}
                  </p>
                  <p className="text-[11px] text-[#786b59] italic font-serif">
                    &ldquo;{biodata.bismillahTranslation}&rdquo;
                  </p>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24] uppercase tracking-wide mt-2">
                    Marriage Biodata
                  </h1>
                </div>

                {/* Groom Header Overview */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-b border-[#ebdcc3]">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#0c2e24]">
                      {biodata.name}
                    </h2>
                    <p className="text-xs font-semibold text-[#8b6f33]">
                      {biodata.designation} · {biodata.educationAndCareer.degree}
                    </p>
                    <p className="text-xs text-[#526359] mt-0.5">
                      {biodata.educationAndCareer.company}, {biodata.educationAndCareer.workLocation}
                    </p>
                  </div>

                  <div className="w-20 h-24 rounded-lg border-2 border-[#c9a45e] bg-[#faf6ed] flex flex-col items-center justify-center text-center p-2 shrink-0">
                    <span className="font-serif font-bold text-lg text-[#0c2e24]">SA</span>
                    <span className="text-[9px] text-[#7e6d56] uppercase">Photo Reference</span>
                  </div>
                </div>

                {/* Section 1: Personal Details */}
                <div className="py-4 border-b border-[#ebdcc3]">
                  <h3 className="font-serif text-base font-bold text-[#0c2e24] uppercase tracking-wider mb-2 text-[#8b6f33]">
                    1. Personal Particulars
                  </h3>
                  <table className="w-full text-xs text-left">
                    <tbody>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40] w-1/3">Date of Birth:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.personal.dob} (Age: {biodata.personal.age} Years)</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Height:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.personal.height}</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Religion & Sect:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.personal.religion} ({biodata.personal.sect})</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Marital Status:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.personal.maritalStatus}</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Mother Tongue:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.personal.motherTongue}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Native Address:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">
                          Village Chirotna, Post Salha Buzurg, P.S. Larjha Ghat, Dist. Samastipur, Bihar – 848207
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Section 2: Education & Career */}
                <div className="py-4 border-b border-[#ebdcc3]">
                  <h3 className="font-serif text-base font-bold text-[#0c2e24] uppercase tracking-wider mb-2 text-[#8b6f33]">
                    2. Education & Profession
                  </h3>
                  <table className="w-full text-xs text-left">
                    <tbody>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40] w-1/3">Qualification:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.educationAndCareer.degree}</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">University:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.educationAndCareer.university} (Year {biodata.educationAndCareer.yearOfPassing})</td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Current Role:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.educationAndCareer.currentDesignation}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Organization:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">{biodata.educationAndCareer.company}, {biodata.educationAndCareer.workLocation}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Section 3: Family Details */}
                <div className="py-4 border-b border-[#ebdcc3]">
                  <h3 className="font-serif text-base font-bold text-[#0c2e24] uppercase tracking-wider mb-2 text-[#8b6f33]">
                    3. Family Background
                  </h3>
                  <table className="w-full text-xs text-left mb-3">
                    <tbody>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40] w-1/3">Father:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">
                          {biodata.family.father.name} ({biodata.family.father.occupation})
                        </td>
                      </tr>
                      <tr className="border-b border-[#f2e9dc]">
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Mother:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">
                          {biodata.family.mother.name} ({biodata.family.mother.occupation})
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-semibold text-[#5a4f40]">Siblings:</td>
                        <td className="py-1.5 text-[#143d30] font-medium">
                          6 Brothers (Including Groom) & 2 Sisters
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <p className="font-semibold text-[#6e5828]">Brothers Details:</p>
                    <ol className="list-decimal pl-5 space-y-0.5 text-[#2b4437]">
                      {biodata.family.brothers.map((b) => (
                        <li key={b.id}>
                          <strong>{b.name}</strong> – {b.education}, {b.occupation} {b.location ? `(${b.location})` : ''} [{b.maritalStatus}]
                        </li>
                      ))}
                    </ol>

                    <p className="font-semibold text-[#6e5828] pt-2">Sisters Details:</p>
                    <ol className="list-decimal pl-5 space-y-0.5 text-[#2b4437]">
                      {biodata.family.sisters.map((s) => (
                        <li key={s.id}>
                          <strong>{s.name}</strong> – {s.education}, {s.occupation} [{s.maritalStatus}]
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Section 4: Contact Particulars */}
                <div className="pt-4">
                  <h3 className="font-serif text-base font-bold text-[#0c2e24] uppercase tracking-wider mb-2 text-[#8b6f33]">
                    4. Contact Details
                  </h3>
                  <table className="w-full text-xs text-left">
                    <tbody>
                      <tr>
                        <td className="py-1 font-semibold text-[#5a4f40] w-1/3">Phone / WhatsApp:</td>
                        <td className="py-1 text-[#143d30] font-bold">{biodata.contact.phoneFormatted}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-semibold text-[#5a4f40]">Email:</td>
                        <td className="py-1 text-[#143d30] font-medium">{biodata.contact.email}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-semibold text-[#5a4f40]">Full Address:</td>
                        <td className="py-1 text-[#143d30] font-medium">{biodata.contact.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Document Footer */}
                <div className="mt-8 pt-4 border-t border-[#ebdcc3] text-center text-[10px] text-[#7e6d56]">
                  <p>
                    {biodata.quranVerseArabic}
                  </p>
                  <p className="mt-1 italic">
                    &ldquo;{biodata.quranVerseTranslation}&rdquo;
                  </p>
                  <p className="mt-2 text-[#9a8972]">
                    © Er. Shadab Anwar | Official Family Matrimonial Profile
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
