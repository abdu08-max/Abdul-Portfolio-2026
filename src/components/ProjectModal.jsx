import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Lightbulb, Layers, ShieldCheck, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const statusBadge = {
  'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'In Progress': 'bg-[#7AA2FF]/10 text-[#7AA2FF] border-[#7AA2FF]/20',
  'Concept': 'bg-amber-500/10 text-amber-400 border-amber-500/20'
};

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { details } = project;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative border-b border-[#222730] dark:border-[#222730] light:border-slate-200 p-6 sm:p-8 bg-gradient-to-r from-[#151A22] to-[#12161C]">
            <button
              type="button"
              id="close-project-modal"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#1A212B] dark:bg-[#1A212B] light:bg-slate-100 text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#222730] dark:border-[#222730] light:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7AA2FF]"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                  statusBadge[project.status] || statusBadge['Completed']
                }`}
              >
                ● {project.status}
              </span>
              <span className="text-xs font-mono text-[#9CA3AF]">
                {project.subtitle}
              </span>
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              {project.tagline}
            </p>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-800 leading-relaxed font-normal">
                {details.overview}
              </p>
            </div>

            {/* Problem & Approach (Two-column layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Problem Addressed
                </h4>
                <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed">
                  {details.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7AA2FF] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Proposed Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed">
                  {details.approach}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {details.keyFeatures && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Key Architectural Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {details.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AA2FF] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#7AA2FF] mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-300 text-xs font-mono text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Lessons Learned */}
            {details.lessonsLearned && (
              <div className="p-4 rounded-xl bg-[#0B0D10]/50 dark:bg-[#0B0D10]/50 light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-[#7AA2FF] block mb-1">
                  Takeaway &amp; Learning
                </span>
                <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 italic">
                  "{details.lessonsLearned}"
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer with Actions */}
          <div className="p-6 border-t border-[#222730] dark:border-[#222730] light:border-slate-200 bg-[#0E1116] dark:bg-[#0E1116] light:bg-slate-50 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#9CA3AF]">
              Status: <span className="text-white dark:text-white light:text-slate-900 font-bold">{project.status}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.links?.isGithubAvailable && project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-300 text-xs font-mono text-white dark:text-white light:text-slate-900 hover:border-[#7AA2FF]/50 transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.links?.demo && project.links.isDemoAvailable && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#7AA2FF] text-black text-xs font-mono font-semibold hover:bg-[#99BAFF] transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-200 text-xs font-mono text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
