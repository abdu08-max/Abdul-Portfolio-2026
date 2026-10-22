import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';


export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-tech-grid"
    >
      {/* Subtle Cinematic Ambient Glow Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-[#7AA2FF]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#7AA2FF]/5 rounded-full blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Badge / Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12161C] dark:bg-[#12161C] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AA2FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7AA2FF]" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                {profileData.greeting}
              </span>
            </div>
          </motion.div>

          {/* Cinematic Title / Main Name Heading */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white dark:text-white light:text-slate-900 uppercase font-sans">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[#F5F5F5] to-[#9CA3AF] dark:from-white dark:via-[#F5F5F5] dark:to-[#9CA3AF] light:from-slate-950 light:via-slate-800 light:to-slate-600">
                {profileData.name}
              </span>
            </h1>
          </motion.div>

          {/* Subtitles & Digital Identity Roles */}
          <motion.div variants={itemVariants} className="space-y-2 mb-6 max-w-3xl">
            <div className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-[#7AA2FF] uppercase font-mono">
              {profileData.title}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium tracking-wider text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 uppercase">
              {profileData.roleTagline}
            </div>
          </motion.div>

          {/* Short Introduction Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-2xl font-normal leading-relaxed mb-10"
          >
            {profileData.heroIntro}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              id="hero-explore-btn"
              onClick={() => scrollTo('#projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7AA2FF] text-black font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#99BAFF] transition-all duration-300 shadow-lg shadow-[#7AA2FF]/20 hover:shadow-[#7AA2FF]/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              id="hero-resume-btn"
              onClick={() => scrollTo('#resume')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#12161C] dark:bg-[#12161C] light:bg-slate-100 text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900 border border-[#222730] dark:border-[#222730] light:border-slate-300 font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#7AA2FF]/50 hover:bg-[#1A212B] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 text-[#7AA2FF]" />
              <span>View Resume</span>
            </button>
          </motion.div>

          {/* Direct Social Links (LinkedIn & GitHub) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mt-5"
          >
            <a
              href="https://www.linkedin.com/in/abdul-muhaiman-basha-a82b54253/"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="px-4 py-2 rounded-xl bg-[#12161C] dark:bg-[#12161C] light:bg-white text-xs font-mono text-[#9CA3AF] hover:text-[#7AA2FF] border border-[#222730] dark:border-[#222730] light:border-slate-300 hover:border-[#7AA2FF]/50 transition-all duration-200 flex items-center gap-2 group shadow-sm hover:-translate-y-0.5"
              aria-label="Visit LinkedIn Profile - Abdul Muhaiman Basha"
            >
              <LinkedinIcon className="w-4 h-4 text-[#7AA2FF] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/abdu08-max"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="px-4 py-2 rounded-xl bg-[#12161C] dark:bg-[#12161C] light:bg-white text-xs font-mono text-[#9CA3AF] hover:text-[#7AA2FF] border border-[#222730] dark:border-[#222730] light:border-slate-300 hover:border-[#7AA2FF]/50 transition-all duration-200 flex items-center gap-2 group shadow-sm hover:-translate-y-0.5"
              aria-label="Visit GitHub Profile - abdu08-max"
            >
              <GithubIcon className="w-4 h-4 text-[#7AA2FF] group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </motion.div>


          {/* Fast Spec Indicator Bar (Automotive / High Tech feel) */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-[#222730]/60 dark:border-[#222730]/60 light:border-slate-200 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
          >
            <div className="p-3 rounded-lg bg-[#12161C]/50 dark:bg-[#12161C]/50 light:bg-slate-100/70 border border-[#222730]/40">
              <span className="block text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider">Institution</span>
              <span className="text-xs font-semibold text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900">SVCE, Chennai</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12161C]/50 dark:bg-[#12161C]/50 light:bg-slate-100/70 border border-[#222730]/40">
              <span className="block text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider">Major</span>
              <span className="text-xs font-semibold text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900">AI &amp; Data Science</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12161C]/50 dark:bg-[#12161C]/50 light:bg-slate-100/70 border border-[#222730]/40">
              <span className="block text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider">Tech Focus</span>
              <span className="text-xs font-semibold text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900">React · Python · SQL</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12161C]/50 dark:bg-[#12161C]/50 light:bg-slate-100/70 border border-[#222730]/40">
              <span className="block text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider">Status</span>
              <span className="text-xs font-semibold text-[#7AA2FF] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7AA2FF]" />
                Building &amp; Learning
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500">
          Scroll
        </span>
        <button
          type="button"
          onClick={() => scrollTo('#about')}
          className="p-1 rounded-full text-[#7AA2FF] hover:translate-y-1 transition-transform focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
