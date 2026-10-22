import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { positionsData } from '../data/positions';

export default function Positions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="positions" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#0D1015]/30 dark:bg-[#0D1015]/30 light:bg-slate-50/50 border-t border-[#222730]/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#7AA2FF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
                Leadership &amp; Roles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
              POSITIONS &amp; INVOLVEMENT
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              Active responsibilities within campus engineering societies and student bodies.
            </p>
          </div>
        </div>

        {/* Minimal Experience-List Layout */}
        <div className="rounded-3xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 divide-y divide-[#222730]/70 dark:divide-[#222730]/70 light:divide-slate-200 shadow-xl overflow-hidden">
          {positionsData.map((pos, index) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 hover:bg-[#151A22]/40 dark:hover:bg-[#151A22]/40 light:hover:bg-slate-50/60 transition-colors duration-200"
            >
              {/* Organization Logo */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${pos.logoBg} p-2 flex items-center justify-center shrink-0 border border-[#222730] dark:border-[#222730] light:border-slate-300 shadow-sm overflow-hidden`}
              >
                <img
                  src={pos.logo}
                  alt={pos.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Role Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {pos.role}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7AA2FF] bg-[#7AA2FF]/10 px-2.5 py-1 rounded-full border border-[#7AA2FF]/20">
                      <Calendar className="w-3 h-3 text-[#7AA2FF]" />
                      <span>{pos.dates}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#E5E7EB] dark:text-[#E5E7EB] light:text-slate-700 mb-3">
                  <Building2 className="w-4 h-4 text-[#7AA2FF] shrink-0" />
                  <span>{pos.organization}</span>
                </div>

                {/* Metadata Row: Location & Work Arrangement */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7AA2FF] shrink-0" />
                    <span>{pos.location}</span>
                  </div>

                  <span className="text-[#222730] dark:text-[#222730] light:text-slate-300">•</span>

                  <span className="px-2 py-0.5 rounded-md bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-[#9CA3AF]">
                    {pos.workArrangement}
                  </span>

                  <span className="text-[#222730] dark:text-[#222730] light:text-slate-300">•</span>

                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
