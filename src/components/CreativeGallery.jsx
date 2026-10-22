import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { creativeCategories, galleryItems } from '../data/gallery';

export default function CreativeGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  // Escape key handler for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="creative" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#7AA2FF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
                Visual Arts &amp; Media
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white dark:text-white light:text-slate-900">
              CREATIVE WORKS &amp; MEDIA
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-xl">
              Automotive photography, graphic identity design, cinematic video production, and post-editing.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {creativeCategories.map((cat) => {
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 overflow-hidden shadow-lg hover:border-[#7AA2FF]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D10]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[#7AA2FF] border border-[#7AA2FF]/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-5">
                <div className="text-[10px] font-mono text-[#9CA3AF] mb-1">
                  {item.medium}
                </div>
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#7AA2FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 mt-1 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 pt-3 border-t border-[#222730]/60 dark:border-[#222730]/60 light:border-slate-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 text-[#9CA3AF] border border-[#222730] dark:border-[#222730] light:border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Lightbox Dialog Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-4xl w-full bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#222730] dark:border-[#222730] light:border-slate-200 bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7AA2FF]">
                      {selectedItem.category} · {selectedItem.medium}
                    </span>
                    <h3 id="lightbox-title" className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-xl bg-[#1A212B] dark:bg-[#1A212B] light:bg-slate-200 text-[#9CA3AF] hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#222730] dark:border-[#222730] light:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7AA2FF]"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Image Preview */}
                <div className="bg-[#0B0D10] max-h-[60vh] flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[60vh] w-auto object-contain mx-auto"
                  />
                </div>

                {/* Lightbox Caption & Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm sm:text-base text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-800 leading-relaxed font-normal">
                    {selectedItem.description}
                  </p>

                  {selectedItem.technicalNotes && (
                    <div className="p-4 rounded-xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-50 border border-[#222730] dark:border-[#222730] light:border-slate-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#7AA2FF] block mb-1">
                        Technical Craft &amp; Methodology
                      </span>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
                        {selectedItem.technicalNotes}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 text-[#7AA2FF] border border-[#222730] dark:border-[#222730] light:border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
