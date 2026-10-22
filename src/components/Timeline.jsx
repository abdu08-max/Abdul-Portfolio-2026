import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { timelineCategories, timelineData } from '../data/timeline';

const categoryIcons = {
  Education: GraduationCap,
  Projects: Briefcase,
};

export default function Timeline() {
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredTimeline = timelineData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#0D1015]/30 dark:bg-[#0D1015]/30 light:bg-slate-50/50 border-t border-[#222730]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#7AA2FF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
                Journey &amp; Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
              EDUCATION &amp; MILESTONES
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              Chronological academic progress and technical project milestones.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {timelineCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#7AA2FF] text-black font-semibold border-[#7AA2FF] shadow-sm shadow-[#7AA2FF]/20'
                      : 'bg-[#12161C] dark:bg-[#12161C] light:bg-white text-[#9CA3AF] border-[#222730] dark:border-[#222730] light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#222730] dark:border-[#222730] light:border-slate-300 space-y-12 ml-2 sm:ml-4">
          {filteredTimeline.map((item, index) => {
            const Icon = categoryIcons[item.category] || GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[37px] sm:-left-[53px] top-1.5 w-8 sm:w-10 h-8 sm:h-10 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg ${
                    item.isPlaceholder
                      ? 'bg-[#151A22] border-[#222730] text-[#9CA3AF]'
                      : 'bg-[#12161C] dark:bg-[#12161C] light:bg-white border-[#7AA2FF]/60 text-[#7AA2FF] group-hover:scale-110 shadow-[#7AA2FF]/10'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Timeline Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-md ${
                    item.isPlaceholder
                      ? 'bg-[#12161C]/50 dark:bg-[#12161C]/50 light:bg-slate-50/70 border-dashed border-[#222730] dark:border-[#222730] light:border-slate-300'
                      : 'bg-[#12161C] dark:bg-[#12161C] light:bg-white border-[#222730] dark:border-[#222730] light:border-slate-200 group-hover:border-[#7AA2FF]/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7AA2FF]">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-300 text-[#9CA3AF]">
                        {item.period}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          item.status.includes('Completed')
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : item.status.includes('In Progress') || item.status.includes('Active')
                            ? 'bg-[#7AA2FF]/10 text-[#7AA2FF] border-[#7AA2FF]/20'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#7AA2FF] transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-medium text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500 mt-1 mb-3">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-3 border-t border-[#222730]/50 dark:border-[#222730]/50 light:border-slate-200">
                      {item.highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7AA2FF] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
