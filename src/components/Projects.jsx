import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

const statusBadgeStyles = {
  'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'In Progress': 'bg-[#7AA2FF]/10 text-[#7AA2FF] border-[#7AA2FF]/20',
  'Concept': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = projectsData.filter((proj) => {
    if (filterStatus === 'All') return true;
    return proj.status === filterStatus;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#7AA2FF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
                Featured Engineering
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
              PROJECTS &amp; SYSTEMS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              Real academic software implementations, algorithmic prototypes, and enthusiast platforms.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Completed', 'In Progress', 'Concept'].map((status) => {
              const isActive = filterStatus === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilterStatus(status)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#7AA2FF] text-black font-semibold border-[#7AA2FF] shadow-sm shadow-[#7AA2FF]/20'
                      : 'bg-[#12161C] dark:bg-[#12161C] light:bg-white text-[#9CA3AF] border-[#222730] dark:border-[#222730] light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const badgeClass = statusBadgeStyles[project.status] || statusBadgeStyles['Completed'];
            const hasGithub = project.links?.isGithubAvailable && project.links?.github;
            const hasDemo = project.links?.isDemoAvailable && project.links?.demo;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group rounded-2xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 flex flex-col hover:border-[#7AA2FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7AA2FF]/5"
              >
                {/* Card Top: Category + Status */}
                <div className="px-6 pt-6 pb-5 border-b border-[#222730]/60 dark:border-[#222730]/60 light:border-slate-100 flex items-start justify-between gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7AA2FF] leading-relaxed">
                    {project.category || project.subtitle}
                  </span>
                  <span
                    className={`shrink-0 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border whitespace-nowrap ${badgeClass}`}
                  >
                    ● {project.status}
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-6 pt-5 pb-4 flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#7AA2FF] transition-colors duration-200 leading-snug mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-[11px] font-mono text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 border-t border-[#222730]/60 dark:border-[#222730]/60 light:border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-semibold text-[#7AA2FF] hover:underline underline-offset-2 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#7AA2FF] rounded"
                    aria-label={`View full details for ${project.title}`}
                  >
                    <span>Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {hasGithub && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {hasDemo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-200 text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
