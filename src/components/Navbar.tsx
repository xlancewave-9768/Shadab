import React, { useState, useEffect } from 'react';
import { Menu, X, Printer, Phone, MessageCircle, Share2, Check } from 'lucide-react';

interface NavbarProps {
  onOpenPrint: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrint, onOpenWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'career', 'family', 'expectations', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Career', href: '#career', id: 'career' },
    { name: 'Family', href: '#family', id: 'family' },
    { name: 'Expectations', href: '#expectations', id: 'expectations' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Er. Shadab Anwar | Marriage Biodata",
          text: "Marriage profile of Er. Shadab Anwar, B.Tech Mechanical & Design Engineer",
          url: window.location.href,
        });
      } catch {
        // Ignored if user dismissed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a231b]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-[#c9a45e]/30'
          : 'bg-[#0c2e24] py-4 border-b border-[#c9a45e]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none rounded-md px-1"
          >
            <span className="w-8 h-8 rounded-full border border-[#c9a45e]/40 bg-[#164234] flex items-center justify-center text-[#f3dd9b] font-serif font-bold text-sm shadow-inner group-hover:border-[#c9a45e] transition-colors">
              SA
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#fdf8ee] group-hover:text-[#f3dd9b] transition-colors whitespace-nowrap shrink-0">
                Er. Shadab Anwar
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#c9a45e] font-sans -mt-0.5">
                Marriage Profile
              </span>
            </div>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#dcd6c8]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none rounded ${
                    isActive ? 'text-[#f5dfa3] font-semibold' : 'hover:text-[#ffffff]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a45e] to-transparent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button + print/share utilities */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleShare}
              title={copiedLink ? "Link Copied!" : "Share Profile"}
              aria-label="Share Profile"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#c9a45e]/40 text-[#f5dfa3] hover:bg-[#164234] hover:border-[#c9a45e] transition-colors focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#8be28b]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenPrint}
              title="Print or Save Biodata PDF"
              aria-label="Print Biodata"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#f5dfa3] border border-[#c9a45e]/50 rounded-lg hover:bg-[#164234] hover:border-[#c9a45e] transition-colors focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Biodata PDF</span>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0c2e24] bg-gradient-to-r from-[#d9ae54] via-[#f5dfa3] to-[#c9a45e] hover:from-[#c9a45e] hover:to-[#b38728] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#0c2e24]" />
              <span>Connect</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#f5dfa3] hover:text-white hover:bg-[#164234] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#c9a45e] focus-visible:outline-none"
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c2e24]/98 border-b border-[#c9a45e]/30 px-5 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#18493a] text-[#f5dfa3] font-semibold'
                      : 'text-[#dcd6c8] hover:bg-[#143b2f] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45e]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#c9a45e]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPrint();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#f5dfa3] border border-[#c9a45e]/40 rounded-lg bg-[#143b2f]"
            >
              <Printer className="w-4 h-4" />
              <span>View & Print Formal Biodata</span>
            </button>
            <a
              href="tel:+916201433381"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white border border-white/20 rounded-lg hover:bg-white/10"
            >
              <Phone className="w-4 h-4 text-[#c9a45e]" />
              <span>Direct Call: +91 6201433381</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
