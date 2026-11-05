import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { biodata } from '../data/biodata';

export const CareerSection: React.FC = () => {
  const skills = [
    'Mechanical Product Design',
    'Industrial CAD / CAM Drafting',
    '3D Modeling & SolidWorks',
    'Manufacturing Process Optimization',
    'Technical Quality Inspection',
    'Material Specifications & BOM'
  ];

  return (
    <section id="career" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9b772b] font-medium block mb-2">
            Academic & Professional Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0d2e24]">
            Education & Career
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a45e] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#5d6a62] leading-relaxed">
            Professional trajectory in engineering design and technical qualification.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#c9a45e]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {/* Timeline Node 1: Current Profession */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full bg-[#c9a45e] border-4 border-white shadow-md flex items-center justify-center ring-2 ring-[#c9a45e]/30" />

            <div className="bg-[#faf7f2] rounded-3xl p-6 sm:p-8 border border-[#e8ddc7] shadow-sm hover:shadow-md hover:border-[#c9a45e] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9b772b] flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#c9a45e]" />
                  Present Role · Full-Time
                </span>
                <span className="text-xs font-medium text-[#6c7d73] bg-[#ebf3ee] px-2.5 py-1 rounded-full border border-[#c4dcce]">
                  Active Industry Experience
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24]">
                {biodata.educationAndCareer.currentDesignation}
              </h3>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#52645a] mt-2 mb-4">
                <span className="font-medium text-[#164234] flex items-center gap-1">
                  <Building2 className="w-4 h-4 text-[#c9a45e]" />
                  {biodata.educationAndCareer.company}
                </span>
                <span aria-hidden="true" className="text-[#c9a45e]">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#c9a45e]" />
                  {biodata.educationAndCareer.workLocation}
                </span>
              </div>

              <p className="text-sm text-[#4a5a50] leading-relaxed">
                Specializing in industrial mechanical design, technical component development, engineering drawing validation, and collaborative manufacturing operations for leading client specifications.
              </p>

              {/* Skills tags */}
              <div className="mt-6 pt-5 border-t border-[#ebdcc4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8b7342] mb-3">
                  Technical Expertise & Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#1e4839] bg-white p-2 rounded-lg border border-[#e6dcce]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2a8b63] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Node 2: Educational Degree */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full bg-[#143d30] border-4 border-white shadow-md flex items-center justify-center ring-2 ring-[#c9a45e]/30" />

            <div className="bg-[#faf7f2] rounded-3xl p-6 sm:p-8 border border-[#e8ddc7] shadow-sm hover:shadow-md hover:border-[#c9a45e] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9b772b] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#c9a45e]" />
                  Graduation · Engineering Degree
                </span>
                <span className="text-xs font-medium text-[#1c5541] bg-[#eef6f1] px-2.5 py-1 rounded-full border border-[#cadfd3]">
                  Passed Out in {biodata.educationAndCareer.yearOfPassing}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2e24]">
                {biodata.educationAndCareer.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#52645a] mt-2 mb-4">
                <span className="font-medium text-[#164234] flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#c9a45e]" />
                  {biodata.educationAndCareer.university}
                </span>
                <span aria-hidden="true" className="text-[#c9a45e]">·</span>
                <span>Punjab, India</span>
              </div>

              <p className="text-sm text-[#4a5a50] leading-relaxed">
                Completed a comprehensive four-year Bachelor of Technology program in Mechanical Engineering, receiving rigorous grounding in thermodynamics, machine design, fluid mechanics, and industrial robotics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
