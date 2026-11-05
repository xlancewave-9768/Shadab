import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Heart,
  Briefcase,
  MapPin,
  GraduationCap,
  X,
  Sparkles,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { biodata, FamilyMember } from '../data/biodata';

export const FamilySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'brothers' | 'sisters'>('all');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  const brothers = biodata.family.brothers;
  const sisters = biodata.family.sisters;

  const filteredMembers =
    activeFilter === 'all'
      ? [...brothers, ...sisters]
      : activeFilter === 'brothers'
      ? brothers
      : sisters;

  return (
    <section id="family" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f5f1e8] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9b772b] font-medium block mb-2">
            Our Roots & Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0d2e24]">
            Family Background
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a45e] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#5d6a62] leading-relaxed">
            A distinguished family rooted in education, medicine, community service, and Islamic morality.
          </p>
        </div>

        {/* Parents Tribute Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Father */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border-t-4 border-[#c9a45e] border-x border-b border-[#e6ddc8] shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="w-10 h-10 rounded-full bg-[#fbf5e7] border border-[#e4ce9e] flex items-center justify-center text-[#9b772b] mb-4">
              <span className="text-lg">✧</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#9b772b] font-semibold block mb-1">
              Father
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24]">
              {biodata.family.father.name}
            </h3>
            <p className="text-sm font-medium text-[#2d5f4c] mt-1 mb-3">
              {biodata.family.father.occupation}
            </p>
            <p className="text-xs sm:text-sm text-[#5d6b63] leading-relaxed">
              {biodata.family.father.details}
            </p>
          </motion.div>

          {/* Mother */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border-t-4 border-[#7b5c96] border-x border-b border-[#e6ddc8] shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="w-10 h-10 rounded-full bg-[#f8f2fd] border border-[#d8c2ed] flex items-center justify-center text-[#7b5c96] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#7b5c96] font-semibold block mb-1">
              Mother
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24]">
              {biodata.family.mother.name}
            </h3>
            <p className="text-sm font-medium text-[#5e4178] mt-1 mb-3">
              {biodata.family.mother.occupation}
            </p>
            <p className="text-xs sm:text-sm text-[#5d6b63] leading-relaxed">
              {biodata.family.mother.details}
            </p>
          </motion.div>
        </div>

        {/* Family Summary Banner */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#e4dac5] text-center mb-10 max-w-2xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9b772b] mb-1">
            <Users className="w-4 h-4 text-[#c9a45e]" />
            <span>Family Hierarchy & Siblings</span>
          </div>
          <p className="font-serif text-xl sm:text-2xl text-[#0c2e24] font-medium">
            6 Brothers <span className="text-xs text-[#6e7d74] font-sans font-normal">(Including Groom)</span> · 2 Sisters
          </p>
          <p className="text-xs text-[#6e7d74] mt-1">
            All brothers and sisters are well-educated, cultured, and settled in reputable fields.
          </p>
        </div>

        {/* Interactive Segmented Filter (Allowed interactive buttons per §1.A) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#e3d7bf] shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0c2e24] text-[#f7e2a9] shadow-sm font-semibold'
                  : 'text-[#5d6a62] hover:text-[#0c2e24]'
              }`}
            >
              All Siblings (7)
            </button>
            <button
              onClick={() => setActiveFilter('brothers')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'brothers'
                  ? 'bg-[#0c2e24] text-[#f7e2a9] shadow-sm font-semibold'
                  : 'text-[#5d6a62] hover:text-[#0c2e24]'
              }`}
            >
              Brothers (5)
            </button>
            <button
              onClick={() => setActiveFilter('sisters')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'sisters'
                  ? 'bg-[#0c2e24] text-[#f7e2a9] shadow-sm font-semibold'
                  : 'text-[#5d6a62] hover:text-[#0c2e24]'
              }`}
            >
              Sisters (2)
            </button>
          </div>
        </div>

        {/* Siblings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMembers.map((member, index) => {
            const isBrother = member.role === 'Brother';
            return (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedMember(member)}
                className={`group cursor-pointer rounded-2xl p-5 border transition-all hover:-translate-y-1 hover:shadow-lg ${
                  isBrother
                    ? 'bg-gradient-to-br from-white to-[#faf6ed] border-[#e7ddc8] hover:border-[#c9a45e]'
                    : 'bg-gradient-to-br from-white to-[#fbf7fc] border-[#e9dfea] hover:border-[#80629b]'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-bold ${
                      isBrother
                        ? 'bg-[#e7c77c]/30 text-[#684c17] border border-[#e4bd70]/60'
                        : 'bg-[#80629b]/15 text-[#5e4178] border border-[#80629b]/40'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                      member.maritalStatus === 'Married'
                        ? 'bg-[#e8f5ec] text-[#1c6448] border-[#c0e4ce]'
                        : 'bg-[#f8f1de] text-[#866324] border-[#ebd49e]'
                    }`}
                  >
                    {member.maritalStatus}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9b772b] block">
                    {member.title || member.role}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#0c2e24] group-hover:text-[#18533e] transition-colors">
                    {member.name}
                  </h4>
                </div>

                <div className="mt-3 space-y-1.5 text-xs text-[#526359] border-t border-[#f0e8d8] pt-3">
                  <div className="flex items-center gap-1.5 text-[#1e4b3a] font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-[#c9a45e] shrink-0" />
                    <span className="truncate">{member.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#c9a45e] shrink-0" />
                    <span className="truncate">{member.occupation}</span>
                  </div>
                  {member.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c9a45e] shrink-0" />
                      <span className="truncate">{member.location}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-[#9b772b] group-hover:text-[#0c2e24] font-medium">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Groom */}
        <div className="mt-12 text-center text-xs text-[#6e7d74] bg-white rounded-xl p-4 border border-[#e4dac5] max-w-xl mx-auto">
          <p>
            <span className="font-bold text-[#0c2e24]">Note:</span> Er. Shadab Anwar is the Mechanical Design Engineer amongst the 6 brothers, currently working in Faridabad, Haryana.
          </p>
        </div>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#c9a45e]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 p-2 rounded-full text-[#6b7b71] hover:text-[#0c2e24] hover:bg-[#faf6ee] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#9b772b] bg-[#fbf5e8] border border-[#e7d5ad] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#c9a45e]" />
                <span>{selectedMember.title || selectedMember.role}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24] mb-1">
                {selectedMember.name}
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    selectedMember.maritalStatus === 'Married'
                      ? 'bg-[#e8f5ec] text-[#1c6448] border-[#c0e4ce]'
                      : 'bg-[#f8f1de] text-[#866324] border-[#ebd49e]'
                  }`}
                >
                  {selectedMember.maritalStatus}
                </span>
                <span className="text-xs text-[#708076]">· Immediate Family</span>
              </div>

              <div className="space-y-3 bg-[#faf7f2] p-4 rounded-2xl border border-[#eee5d3] mb-6 text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8b7964] block font-medium">Education</span>
                  <span className="font-semibold text-[#143d30]">{selectedMember.education}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8b7964] block font-medium">Occupation & Role</span>
                  <span className="font-semibold text-[#143d30]">{selectedMember.occupation}</span>
                </div>
                {selectedMember.location && (
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8b7964] block font-medium">Location</span>
                    <span className="font-semibold text-[#143d30]">{selectedMember.location}</span>
                  </div>
                )}
              </div>

              {selectedMember.details && (
                <div className="text-sm text-[#4b5a51] leading-relaxed mb-6">
                  {selectedMember.details}
                </div>
              )}

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-2.5 rounded-xl font-medium text-xs text-[#0c2e24] bg-[#f3eedd] hover:bg-[#ebdcc0] transition-colors"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
