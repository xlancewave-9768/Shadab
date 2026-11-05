import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, Compass, BookOpen, Users } from 'lucide-react';
import { biodata } from '../data/biodata';

export const ExpectationsSection: React.FC = () => {
  return (
    <section id="expectations" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9b772b] font-medium block mb-2">
            Looking Forward
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0d2e24]">
            Partner Expectations & Values
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a45e] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#5d6a62] leading-relaxed">
            Hopes for a harmonious life partner grounded in mutual faith, understanding, and respect.
          </p>
        </div>

        {/* 4 Pillars of Compatibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pillar 1: Religious & Moral Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-[#e8ddc7] shadow-sm hover:border-[#c9a45e] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#fbf5e7] border border-[#e4ce9e] flex items-center justify-center text-[#9b772b] mb-4">
              <Compass className="w-5 h-5 text-[#c9a45e]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2e24] mb-2">
              Faith & Deen
            </h3>
            <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
              Practicing Sunni Muslim who observes daily prayers, carries high moral values, and seeks spiritual and personal growth together in marriage.
            </p>
          </motion.div>

          {/* Pillar 2: Educational Grounding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-[#e8ddc7] shadow-sm hover:border-[#c9a45e] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#fbf5e7] border border-[#e4ce9e] flex items-center justify-center text-[#9b772b] mb-4">
              <BookOpen className="w-5 h-5 text-[#c9a45e]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2e24] mb-2">
              Education & Ambition
            </h3>
            <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
              Graduate or Post-Graduate in any respected stream. An intellectually curious mind with the balance of personal refinement and practical wisdom.
            </p>
          </motion.div>

          {/* Pillar 3: Family Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-[#e8ddc7] shadow-sm hover:border-[#c9a45e] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#fbf5e7] border border-[#e4ce9e] flex items-center justify-center text-[#9b772b] mb-4">
              <Users className="w-5 h-5 text-[#c9a45e]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2e24] mb-2">
              Family-Oriented Disposition
            </h3>
            <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
              Hailing from a cultured and respectable family, having heartfelt regard for elders, siblings, and upholding warm extended-family relationships.
            </p>
          </motion.div>

          {/* Pillar 4: Compatibility & Harmony */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-[#e8ddc7] shadow-sm hover:border-[#c9a45e] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#fbf5e7] border border-[#e4ce9e] flex items-center justify-center text-[#9b772b] mb-4">
              <HeartHandshake className="w-5 h-5 text-[#c9a45e]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2e24] mb-2">
              Mutual Respect & Kindness
            </h3>
            <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
              Understanding, calm temperament, and cooperative approach where husband and wife support each other through all walks of life.
            </p>
          </motion.div>
        </div>

        {/* Detailed Criteria List */}
        <div className="bg-[#0c2e24] text-white rounded-3xl p-6 sm:p-10 border border-[#c9a45e]/40 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fcedc7] mb-4">
              Key Desired Attributes at a Glance
            </h3>
            <div className="space-y-3">
              {biodata.preferences.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a45e] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#dce7df] leading-relaxed">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
