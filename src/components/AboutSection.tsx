import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Ruler,
  Heart,
  Globe2,
  Home,
  UserCheck,
  ShieldCheck,
  Camera,
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';
import { biodata } from '../data/biodata';

export const AboutSection: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shadab_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setUploadNotice('Please select an image smaller than 5MB.');
        setTimeout(() => setUploadNotice(null), 3000);
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('shadab_profile_photo', result);
        setUploadNotice('Photo updated successfully!');
        setTimeout(() => setUploadNotice(null), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setPhotoUrl(null);
    localStorage.removeItem('shadab_profile_photo');
    setUploadNotice('Reset to default insignia portrait.');
    setTimeout(() => setUploadNotice(null), 3000);
  };

  const personalAttributes = [
    { label: 'Full Name', value: biodata.name, icon: UserCheck },
    { label: 'Date of Birth', value: `${biodata.personal.dob} (Age ${biodata.personal.age} Yrs)`, icon: Calendar },
    { label: 'Height', value: biodata.personal.height, icon: Ruler },
    { label: 'Marital Status', value: biodata.personal.maritalStatus, icon: Heart },
    { label: 'Religion & Sect', value: `${biodata.personal.religion} (${biodata.personal.sect})`, icon: ShieldCheck },
    { label: 'Mother Tongue', value: biodata.personal.motherTongue, icon: Globe2 },
    { label: 'Languages Known', value: biodata.personal.languagesKnown.join(', '), icon: Globe2 },
    {
      label: 'Native Place',
      value: `${biodata.personal.nativePlace.village}, Samastipur, Bihar`,
      icon: Home
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9b772b] font-medium block mb-2">
            Personal Details
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0d2e24]">
            About Er. Shadab Anwar
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a45e] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#5d6a62] leading-relaxed">
            A comprehensive overview of personal background, upbringing, and characteristics.
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Portrait Card with Islamic Arch Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-[#e8ddc7] shadow-xl shadow-[#123d30]/5 relative overflow-hidden">
              {/* Islamic Arch Border Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-[#c9a45e]/50 bg-gradient-to-b from-[#143a2f] via-[#0d2e24] to-[#071d18] flex flex-col items-center justify-center p-6 text-center shadow-inner group">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="Er. Shadab Anwar"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Royal Monogram / Insignia */}
                    <div className="w-28 h-28 rounded-full border-2 border-[#e7c77c] bg-[#1a4a3b] flex items-center justify-center text-[#f7e2a9] shadow-lg relative">
                      <span className="font-serif text-3xl font-bold tracking-tight">
                        SA
                      </span>
                      <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#c9a45e] text-[#0c2e24] text-[10px] font-bold uppercase tracking-wider">
                        Engineer
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#f7eed8]">
                        Er. Shadab Anwar
                      </h3>
                      <p className="text-xs text-[#c9a45e] font-medium">
                        Mechanical Design Engineer
                      </p>
                    </div>

                    <p className="text-xs text-[#b0c4b8] max-w-[220px] leading-relaxed pt-2">
                      Professional portrait available for family reference. You can also upload a photo below.
                    </p>
                  </div>
                )}

                {/* Subtle Islamic Arch Corner flourishes */}
                <div className="absolute top-2 left-2 text-[#c9a45e]/40 text-xs">✧</div>
                <div className="absolute top-2 right-2 text-[#c9a45e]/40 text-xs">✧</div>
                <div className="absolute bottom-2 left-2 text-[#c9a45e]/40 text-xs">✧</div>
                <div className="absolute bottom-2 right-2 text-[#c9a45e]/40 text-xs">✧</div>
              </div>

              {/* Photo Upload / Update Controls */}
              <div className="mt-4 pt-3 border-t border-[#f0e6d2] flex items-center justify-between text-xs">
                <label
                  htmlFor="photo-upload-input"
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#0c2e24] bg-[#f4edd9] hover:bg-[#e7d8b5] transition-colors font-medium focus-within:ring-2 focus-within:ring-[#c9a45e]"
                >
                  <Camera className="w-3.5 h-3.5 text-[#9b772b]" />
                  <span>{photoUrl ? 'Change Photo' : 'Upload Photo'}</span>
                  <input
                    id="photo-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="sr-only"
                  />
                </label>

                {photoUrl && (
                  <button
                    onClick={handleResetPhoto}
                    className="inline-flex items-center gap-1 text-[#837868] hover:text-[#9b2b2b] transition-colors py-1 px-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {uploadNotice && (
                <div className="mt-2 text-center text-xs text-[#1f6b4d] font-medium bg-[#e7f5ee] py-1 px-2 rounded flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>{uploadNotice}</span>
                </div>
              )}
            </div>

            {/* Quick Badges below photo */}
            <div className="w-full max-w-sm mt-4 p-4 rounded-2xl bg-white border border-[#e8ddc7] space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#0c2e24] font-medium">
                <Sparkles className="w-4 h-4 text-[#c9a45e] shrink-0" />
                <span>Respectful, prayerful Sunni Muslim background</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#0c2e24] font-medium">
                <Sparkles className="w-4 h-4 text-[#c9a45e] shrink-0" />
                <span>Well-settled professional in NCR (Faridabad)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Information Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio summary block */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ddc7] shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-[#0c2e24] mb-2">
                Personal Summary
              </h3>
              <p className="text-sm sm:text-base text-[#4a5850] leading-relaxed">
                Er. Shadab Anwar is a dedicated mechanical engineer currently working as a Design Engineer at YAMAN Industry Pvt. Ltd. in Faridabad, Haryana. Raised with disciplined moral ethics and deep respect for family traditions, he balances modern professional aspirations with spiritual values and cultural groundedness.
              </p>

              {/* Key Attributes 2-col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#f0e6d2]">
                {personalAttributes.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee4d0] hover:border-[#c9a45e]/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[#8c7442] mb-1">
                        <Icon className="w-4 h-4 text-[#c9a45e]" />
                        <span className="text-[11px] uppercase tracking-wider font-medium text-[#776c5b]">
                          {item.label}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-[#143d30]">
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lifestyle & Habits Strip */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8ddc7] shadow-sm">
              <h4 className="font-serif text-lg font-semibold text-[#0c2e24] mb-3">
                Habits, Ethics & Lifestyle
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#f4f7f5] border border-[#dce6e0]">
                  <span className="text-[11px] text-[#55695e] block">Diet</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#0c2e24] mt-0.5 block">
                    Halal / Non-Veg
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f4f7f5] border border-[#dce6e0]">
                  <span className="text-[11px] text-[#55695e] block">Smoking</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#0c2e24] mt-0.5 block">
                    Non-Smoker
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f4f7f5] border border-[#dce6e0]">
                  <span className="text-[11px] text-[#55695e] block">Alcohol</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#0c2e24] mt-0.5 block">
                    Teetotaler
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f4f7f5] border border-[#dce6e0]">
                  <span className="text-[11px] text-[#55695e] block">Physical Fitness</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#0c2e24] mt-0.5 block">
                    Active & Healthy
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
