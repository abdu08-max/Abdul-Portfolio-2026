import React from 'react';
import { GraduationCap, Cpu, Sparkles, Camera, Quote, Code, Compass, Heart } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap = {
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Camera: Camera,
};

export default function About() {


  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#7AA2FF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
              Overview &amp; Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
            A LITTLE ABOUT ME
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
            Undergraduate student balancing algorithmic rigor with modern digital design and creative media.
          </p>
        </div>

        {/* Main Grid: Bio & Structured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography & Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AA2FF]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#7AA2FF]" />
                Engineering, Algorithms &amp; Creative Craft
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed font-normal">
                {profileData.aboutBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>


              <div className="mt-8 pt-6 border-t border-[#222730] dark:border-[#222730] light:border-slate-200 flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#7AA2FF] shrink-0 mt-1 opacity-80" />
                <div>
                  <blockquote className="text-base sm:text-lg font-medium italic text-white dark:text-white light:text-slate-900">
                    "{profileData.personalStatement}"
                  </blockquote>
                  <span className="text-xs font-mono text-[#9CA3AF] mt-1 block">
                    — Personal Driving Philosophy
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Digital Persona Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <div className="flex items-center gap-2 text-[#7AA2FF] mb-1">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Builder</span>
                </div>
                <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  Focused on writing clean code, modular components, and reliable logic.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <div className="flex items-center gap-2 text-[#7AA2FF] mb-1">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Explorer</span>
                </div>
                <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  Constantly studying AI paradigms, ML workflows, and database mechanics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <div className="flex items-center gap-2 text-[#7AA2FF] mb-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Enthusiast</span>
                </div>
                <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  Driven by automotive engineering, aesthetic photography, and cinematic editing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Information Panels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {profileData.infoPanels.map((panel) => {
              const IconComponent = iconMap[panel.icon] || Sparkles;
              return (
                <div
                  key={panel.id}
                  className="p-5 rounded-2xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 hover:border-[#7AA2FF]/40 transition-all duration-300 group shadow-md"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-[#7AA2FF] group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500">
                        {panel.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7AA2FF]/10 text-[#7AA2FF] border border-[#7AA2FF]/20">
                      {panel.badge}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    {panel.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 mt-1 leading-relaxed">
                    {panel.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
