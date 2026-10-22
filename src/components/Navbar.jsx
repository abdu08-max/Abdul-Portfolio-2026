import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import { profileData } from '../data/profile';

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Positions', href: '#positions', id: 'positions' },
  { label: 'Timeline', href: '#timeline', id: 'timeline' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D10]/85 dark:bg-[#0B0D10]/85 light:bg-white/85 backdrop-blur-md border-b border-[#222730] dark:border-[#222730] light:border-slate-200 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#7AA2FF]/60 rounded-lg p-1"
            aria-label="Abdul Muhaiman Basha - Back to top"
          >

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7AA2FF] to-[#3B82F6] flex items-center justify-center font-bold text-black tracking-wider text-sm shadow-md shadow-[#7AA2FF]/20 group-hover:scale-105 transition-transform duration-300">
  {profileData.initials}
</div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider uppercase text-white dark:text-white light:text-slate-900 group-hover:text-[#7AA2FF] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500 font-mono">
                AI &amp; DATA SCIENCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#7AA2FF] dark:text-[#7AA2FF] light:text-blue-600 bg-[#7AA2FF]/10 font-semibold'
                      : 'text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#7AA2FF] rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">


            {/* Quick Action: Explore Resume */}
            <a
              href="#resume"
              onClick={(e) => scrollTo(e, '#resume')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 text-[#7AA2FF] border border-[#222730] dark:border-[#222730] light:border-slate-300 hover:border-[#7AA2FF]/50 hover:bg-[#1A212B] transition-all duration-200"
            >
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 border border-[#222730] dark:border-[#222730] light:border-slate-300 text-[#9CA3AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7AA2FF]/50"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0B0D10]/95 dark:bg-[#0B0D10]/95 light:bg-white/95 backdrop-blur-xl border-t border-[#222730] dark:border-[#222730] light:border-slate-200 z-40 transition-all p-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#7AA2FF] bg-[#7AA2FF]/10 font-bold border-l-4 border-[#7AA2FF]'
                      : 'text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-700 hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#222730] dark:border-[#222730] light:border-slate-200 flex flex-col gap-3">
            <div className="text-xs text-[#9CA3AF] font-mono">
              Abdul Muhaiman Basha · SVCE Chennai
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="w-full py-3 rounded-xl bg-[#7AA2FF] text-black font-semibold text-center text-sm uppercase tracking-wider hover:bg-[#99BAFF] transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
