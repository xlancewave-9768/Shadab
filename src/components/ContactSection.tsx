import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { biodata } from '../data/biodata';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#09221a] text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3d284f,transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#185b44,transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e8cf99] font-medium block mb-2">
            Connect With Our Family
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fdf8ee]">
            Contact & Communication
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a45e] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#c8d8ce] leading-relaxed">
            Parents, guardians, and prospective families are cordially invited for respectful inquiries and discussion.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Communication Channels */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#c9a45e]/40 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdf9f0]">
                    {biodata.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e4cd99] mt-0.5 font-medium">
                    {biodata.designation} · {biodata.personal.nativePlace.district}, {biodata.personal.nativePlace.state}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#c9a45e]/50 bg-[#164234] flex items-center justify-center text-[#fcedc7] font-serif font-bold shrink-0">
                  SA
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a45e]/20 border border-[#c9a45e]/40 flex items-center justify-center text-[#fcedc7] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#b8ccbf] block">
                        Direct Phone / Call
                      </span>
                      <a
                        href={`tel:${biodata.contact.phone}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-[#fcedc7] transition-colors"
                      >
                        {biodata.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(biodata.contact.phone, 'phone')}
                    className="p-2 text-[#c9a45e] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title={copiedPhone ? "Copied!" : "Copy Phone"}
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#79df79]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a45e]/20 border border-[#c9a45e]/40 flex items-center justify-center text-[#fcedc7] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#b8ccbf] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${biodata.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-[#fcedc7] transition-colors break-all"
                      >
                        {biodata.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(biodata.contact.email, 'email')}
                    className="p-2 text-[#c9a45e] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title={copiedEmail ? "Copied!" : "Copy Email"}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#79df79]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onOpenWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-[#09221a] bg-gradient-to-r from-[#d9ae54] via-[#f7e2a9] to-[#c9a45e] hover:shadow-[0_0_30px_rgba(201,164,94,0.45)] hover:-translate-y-0.5 transition-all active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MessageCircle className="w-5 h-5 text-[#09221a]" />
                <span>Initiate WhatsApp Conversation</span>
              </button>
            </div>
          </motion.div>

          {/* Native Address & Location Details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#c9a45e]/20 border border-[#c9a45e]/40 flex items-center justify-center text-[#fcedc7] mb-4">
                <MapPin className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#fdf9f0] mb-2">
                Native Residence
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-[#dbe6df] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#fcedc7]">Village:</strong> Chirotna
                </p>
                <p>
                  <strong className="text-[#fcedc7]">Post Office:</strong> Salha Buzurg
                </p>
                <p>
                  <strong className="text-[#fcedc7]">Police Station:</strong> Larjha Ghat
                </p>
                <p>
                  <strong className="text-[#fcedc7]">District:</strong> Samastipur, Bihar
                </p>
                <p>
                  <strong className="text-[#fcedc7]">PIN Code:</strong> 848207
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/20 border border-white/10 space-y-1.5 text-xs text-[#b8ccbf]">
                <div className="flex items-center gap-1.5 text-[#fcedc7] font-semibold">
                  <Navigation className="w-4 h-4 text-[#c9a45e]" />
                  <span>Current Work Location</span>
                </div>
                <p>Faridabad, Haryana (Delhi NCR Region)</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=Samastipur,Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#fcedc7] hover:underline"
              >
                <span>View Region on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-1 text-[11px] text-[#97a89d]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#79df79]" />
                <span>Verified Family Profile</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
