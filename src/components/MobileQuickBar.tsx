import React from 'react';
import { Phone, MessageCircle, Printer } from 'lucide-react';
import { biodata } from '../data/biodata';

interface MobileQuickBarProps {
  onOpenPrint: () => void;
  onOpenWhatsApp: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenPrint,
  onOpenWhatsApp,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a231b]/95 backdrop-blur-lg border-t border-[#c9a45e]/30 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        <a
          href={`tel:${biodata.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white hover:bg-white/10 active:bg-white/20 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c9a45e] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Call Direct</span>
        </a>

        <button
          onClick={onOpenWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#d9ae54] to-[#f5dfa3] text-[#0c2e24] font-semibold active:scale-95 transition-transform shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-[#0c2e24] mb-0.5" />
          <span className="text-[10px] tracking-tight">WhatsApp</span>
        </button>

        <button
          onClick={onOpenPrint}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white hover:bg-white/10 active:bg-white/20 transition-colors"
        >
          <Printer className="w-4 h-4 text-[#c9a45e] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Biodata PDF</span>
        </button>
      </div>
    </div>
  );
};
