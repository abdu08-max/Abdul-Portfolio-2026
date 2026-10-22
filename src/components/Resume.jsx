import React, { useState } from 'react';
import { 
  Printer, Download, Mail, MapPin, 
  CheckCircle2, GraduationCap, Briefcase, 
  Layers, Award, Info, X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';

import { projectsData } from '../data/projects';

export default function Resume() {
  const [showPdfHelp, setShowPdfHelp] = useState(false);


  const handlePrint = () => {
    window.open(profileData.contact.resumePdfPath, '_blank');
  };

  const handleDownload = (e) => {
    // Check if resume PDF exists or trigger help guidance
    if (!profileData.contact.hasCustomPdf) {
      e.preventDefault();
      setShowPdfHelp(true);
    }
  };

  return (
    <section id="resume" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#0B0D10] dark:bg-[#0B0D10] light:bg-slate-100/60 border-t border-[#222730]/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header (Hidden in Print) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 no-print">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#7AA2FF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
                Curriculum Vitae
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
              INTERACTIVE RESUME
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              Recruiter-friendly digital format. Fully formatted for high-contrast print or PDF generation.
            </p>
          </div>

          {/* Action Buttons: Print & Download */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="print-resume-btn"
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-300 text-white dark:text-white light:text-slate-900 hover:border-[#7AA2FF]/60 hover:bg-[#1A212B] transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-sm"
              aria-label="Open print dialog for resume"
            >
              <Printer className="w-4 h-4 text-[#7AA2FF]" />
              <span>Print Resume</span>
            </button>

            {profileData.contact.hasCustomPdf ? (
              <a
                href={profileData.contact.resumePdfPath}
                download="Abdul_Muhaiman_Basha_Resume.pdf"
                id="download-resume-btn"

                className="px-5 py-2.5 rounded-xl bg-[#7AA2FF] text-black hover:bg-[#99BAFF] transition-all text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 shadow-md shadow-[#7AA2FF]/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            ) : (
              <button
                type="button"
                id="download-resume-btn"
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl bg-[#7AA2FF] text-black hover:bg-[#99BAFF] transition-all text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 shadow-md shadow-[#7AA2FF]/20"
                aria-label="Configure PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            )}
          </div>
        </div>

        {/* PDF Instruction Modal (If no PDF has been placed in public/resume.pdf yet) */}
        {showPdfHelp && (
          <div className="mb-8 p-5 rounded-2xl bg-[#151A22] dark:bg-[#151A22] light:bg-white border border-[#7AA2FF]/40 text-xs sm:text-sm text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900 shadow-xl relative no-print">
            <button
              type="button"
              onClick={() => setShowPdfHelp(false)}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white p-1"
              aria-label="Dismiss notice"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#7AA2FF] shrink-0 mt-0.5" />
              <div className="space-y-2 pr-6">
                <p className="font-bold text-sm text-[#7AA2FF]">
                  How to configure your custom PDF resume:
                </p>
                <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  Place your finalized resume file as <code className="text-[#7AA2FF] font-mono px-1.5 py-0.5 rounded bg-black/40">public/Abdul_Muhaiman_Basha_Resume.pdf</code>, and set <code className="text-[#7AA2FF] font-mono px-1.5 py-0.5 rounded bg-black/40">hasCustomPdf: true</code> inside <code className="text-[#7AA2FF] font-mono px-1.5 py-0.5 rounded bg-black/40">src/data/profile.js</code>.
                </p>

                <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                  In the meantime, click <strong>"Print Resume"</strong> above to instantly export or save this live CV layout as a pristine, high-resolution PDF directly through your browser's Print Dialog (Save as PDF)!
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-lg bg-[#7AA2FF] text-black font-semibold text-xs font-mono"
                  >
                    Export via Print Dialog
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPdfHelp(false)}
                    className="text-xs text-[#9CA3AF] hover:underline"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Digital CV Sheet Container (Printable target) */}
        <div
          id="printable-resume"
          className="resume-sheet rounded-3xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 p-8 sm:p-12 shadow-2xl relative transition-colors"
        >
          {/* Resume Header / Candidate Identity */}
          <div className="border-b border-[#222730] pb-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white dark:text-white light:text-slate-950 font-sans">
                  {profileData.name}
                </h1>
                <p className="text-sm font-semibold tracking-wider text-[#7AA2FF] uppercase font-mono mt-1">
                  {profileData.title}
                </p>
                <p className="text-xs font-mono text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500 mt-1">
                  {profileData.contact.college}
                </p>
              </div>

              {/* Contact meta */}
              <div className="space-y-1.5 text-xs font-mono text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 sm:text-right">
                <div className="flex items-center sm:justify-end gap-2">
                  <span>{profileData.contact.location}</span>
                  <MapPin className="w-3.5 h-3.5 text-[#7AA2FF]" />
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <a href={`mailto:${profileData.contact.email}`} className="hover:text-[#7AA2FF] transition-colors">
                    {profileData.contact.email}
                  </a>
                  <Mail className="w-3.5 h-3.5 text-[#7AA2FF]" />
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <a
                    href="https://www.linkedin.com/in/abdul-muhaiman-basha-a82b54253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7AA2FF] transition-colors"
                  >
                    LinkedIn: abdul-muhaiman-basha
                  </a>
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#7AA2FF]" />
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <a
                    href="https://github.com/abdu08-max"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7AA2FF] transition-colors"
                  >
                    GitHub: abdu08-max
                  </a>
                  <GithubIcon className="w-3.5 h-3.5 text-[#7AA2FF]" />
                </div>

              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-6 pt-6 border-t border-[#222730]/60 text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700 leading-relaxed">
              <strong className="text-white dark:text-white light:text-slate-900 font-semibold block mb-1 uppercase font-mono text-xs text-[#7AA2FF]">
                Executive Summary
              </strong>
              {profileData.aboutBio[0]} {profileData.heroIntro}
            </div>
          </div>

          {/* Resume Body Sections */}
          <div className="space-y-8">
            {/* 1. Education */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-4 flex items-center gap-2 border-b border-[#222730] pb-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      Bachelor of Technology — Artificial Intelligence &amp; Data Science
                    </h4>
                    <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                      Sri Venkateswara College of Engineering (SVCE), Chennai
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#7AA2FF]">
                    Undergraduate Program
                  </span>
                </div>
                <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed">
                  Key Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (MySQL), Artificial Intelligence Foundations, Machine Learning Principles, Operating Systems.
                </p>
              </div>
            </div>

            {/* 2. Technical Skills Matrix */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-4 flex items-center gap-2 border-b border-[#222730] pb-1.5">
                <Layers className="w-4 h-4" /> Technical Proficiencies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                  <span className="font-mono text-[#7AA2FF] block mb-1 uppercase font-bold text-[11px]">
                    Languages &amp; Core
                  </span>
                  <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700">
                    Python, JavaScript (ES6+), C, C++
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                  <span className="font-mono text-[#7AA2FF] block mb-1 uppercase font-bold text-[11px]">
                    Web Technologies
                  </span>
                  <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700">
                    React, Vite, Tailwind CSS, HTML5, CSS3, REST APIs
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                  <span className="font-mono text-[#7AA2FF] block mb-1 uppercase font-bold text-[11px]">
                    Databases &amp; Storage
                  </span>
                  <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700">
                    MySQL, Relational Database Normalization, SQL Constraints, ACID
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                  <span className="font-mono text-[#7AA2FF] block mb-1 uppercase font-bold text-[11px]">
                    Creative &amp; Visual Tools
                  </span>
                  <p className="text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700">
                    Video Editing, Automotive Photography, Videography
                  </p>
                </div>

              </div>
            </div>

            {/* 3. Featured Projects */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-4 flex items-center gap-2 border-b border-[#222730] pb-1.5">
                <Briefcase className="w-4 h-4" /> Technical Projects
              </h3>

              <div className="space-y-5">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                          {proj.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151A22] text-[#7AA2FF] border border-[#222730]">
                          {proj.status}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#9CA3AF]">
                        {proj.technologies.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed">
                      {proj.details.overview}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Positions & Campus Involvement */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-4 flex items-center gap-2 border-b border-[#222730] pb-1.5">
                <Award className="w-4 h-4" /> Positions &amp; Campus Involvement
              </h3>

              <div className="space-y-3 text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7AA2FF] shrink-0 mt-0.5" />
                  <span>
                    <strong>Association of Computer Engineers (ACE), SVCE:</strong> Videographer · August 2026 – Present (Hybrid · Chennai, India)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7AA2FF] shrink-0 mt-0.5" />
                  <span>
                    <strong>FORum for Economic Studies by Engineers (FORESE):</strong> Member · August 2026 – Present (Hybrid · Chennai, India)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Footer Note */}
          <div className="mt-8 pt-6 border-t border-[#222730] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#9CA3AF] gap-2">
            <span>Abdul Muhaiman Basha · B.Tech AI &amp; DS (SVCE Chennai)</span>
            <span>Digital Resume Document · Verified Academic Profile</span>
          </div>

        </div>
      </div>
    </section>
  );
}
