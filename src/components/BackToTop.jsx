import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      id="floating-back-to-top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#12161C]/90 dark:bg-[#12161C]/90 light:bg-white/90 backdrop-blur-md border border-[#222730] dark:border-[#222730] light:border-slate-300 text-[#7AA2FF] hover:bg-[#7AA2FF] hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#7AA2FF] no-print"
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
