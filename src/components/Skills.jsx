import React from 'react';
import { skillCategories, skillsData } from '../data/skills';

/**
 * Minimal Skills component
 * Displays skills as compact categorized lists.
 */
export default function Skills() {
  const categories = skillCategories.filter(c => c !== 'All');
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0D1015]/40 dark:bg-[#0D1015]/40 border-y border-[#222730]/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#7AA2FF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
              Technical Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
            SKILLS &amp; PROFICIENCIES
          </h2>
          <p className="mt-2 text-sm text-[#9CA3AF] max-w-xl mx-auto">
            Categorized by functional domain. No percentage bars – just clear, honest skills.
          </p>
        </div>

        {/* Category lists */}
        {categories.map(category => {
          const list = skillsData.filter(s => s.category === category);
          if (!list.length) return null;
          return (
            <div key={category} className="mb-8">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-3">
                {category.toUpperCase()}
              </h3>
              <ul className="space-y-2">
                {list.map(skill => (
                  <li
                    key={skill.name}
                    className="flex justify-between items-center px-3 py-1.5 rounded bg-[#151A22] border border-[#222730]"
                  >
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-[#7AA2FF] uppercase">{skill.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
