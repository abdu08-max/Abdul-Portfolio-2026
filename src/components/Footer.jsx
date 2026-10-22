import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-[#222730] dark:border-[#222730] light:border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] dark:bg-[#0B0D10] light:bg-white text-xs font-mono text-[#9CA3AF] transition-colors no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-[#7AA2FF] text-black font-bold flex items-center justify-center text-xs">
            {profileData.initials}
          </div>
          <div>
            <p className="text-white dark:text-white light:text-slate-900 font-bold tracking-wider">
              {profileData.name}
            </p>
            <p className="text-[11px] text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500">
              Department of Artificial Intelligence &amp; Data Science · SVCE
            </p>
          </div>
        </div>

        {/* Right: Back to top anchor */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#12161C] dark:bg-[#12161C] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-300 text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-[#7AA2FF]/50 transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
