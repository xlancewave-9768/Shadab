import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CareerSection } from './components/CareerSection';
import { FamilySection } from './components/FamilySection';
import { ExpectationsSection } from './components/ExpectationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WelcomeModal } from './components/WelcomeModal';
import { PrintBiodataModal } from './components/PrintBiodataModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { biodata } from './data/biodata';

export default function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  useEffect(() => {
    // Only show on first visit in the current session
    const hasSeenWelcome = sessionStorage.getItem('shadab_welcome_dismissed');
    if (!hasSeenWelcome) {
      setIsWelcomeOpen(true);
    }
  }, []);

  const handleCloseWelcome = () => {
    setIsWelcomeOpen(false);
    sessionStorage.setItem('shadab_welcome_dismissed', 'true');
  };

  const handleReplayWelcome = () => {
    setIsWelcomeOpen(true);
  };

  const handleOpenWhatsApp = () => {
    window.open(biodata.contact.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenPrint = () => {
    setIsPrintModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b2b24] font-sans selection:bg-[#d4af37]/30 selection:text-[#0c2e24]">
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0c2e24] text-[#f5dfa3] font-medium rounded-lg shadow-lg border border-[#c9a45e] focus:outline-none focus:ring-2 focus:ring-[#c9a45e]"
      >
        Skip to main content
      </a>

      {/* Royal Welcome Intro Modal */}
      <WelcomeModal
        isOpen={isWelcomeOpen}
        onClose={handleCloseWelcome}
      />

      {/* Printable Biodata Modal */}
      <PrintBiodataModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Sticky Top Navigation */}
      <Navbar
        onOpenPrint={handleOpenPrint}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenPrint={handleOpenPrint}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Personal Details & Profile Photo */}
        <AboutSection />

        {/* Education & Career Timeline */}
        <CareerSection />

        {/* Family Background, Parents & Siblings */}
        <FamilySection />

        {/* Partner Expectations & Compatibility */}
        <ExpectationsSection />

        {/* Direct Contact & Samastipur Address */}
        <ContactSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrint={handleOpenPrint}
        onOpenWhatsApp={handleOpenWhatsApp}
        onReplayWelcome={handleReplayWelcome}
      />

      {/* Floating Bottom Quick Action Dock on Mobile */}
      <MobileQuickBar
        onOpenPrint={handleOpenPrint}
        onOpenWhatsApp={handleOpenWhatsApp}
      />
    </div>
  );
}
