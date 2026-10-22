import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Send, MapPin, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { contact } = profileData;

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.email);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = contact.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-tech-grid">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#7AA2FF]/10 rounded-full blur-[100px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#7AA2FF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7AA2FF]">
              Get In Touch
            </span>
            <span className="w-8 h-[2px] bg-[#7AA2FF]" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white dark:text-white light:text-slate-900 mb-6 font-sans">
            {contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600 max-w-2xl leading-relaxed mb-10">
            {contact.subheading}
          </p>

          {/* Email Copy Card */}
          <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-200 shadow-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="p-3 rounded-2xl bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 text-[#7AA2FF] border border-[#222730] dark:border-[#222730] light:border-slate-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block">
                  Direct Email Address
                </span>
                <span className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 break-all font-mono">
                  {contact.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Copy Email Button */}
              <button
                type="button"
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-[#151A22] dark:bg-[#151A22] light:bg-slate-100 text-[#F5F5F5] dark:text-[#F5F5F5] light:text-slate-900 border-[#222730] dark:border-[#222730] light:border-slate-300 hover:border-[#7AA2FF]/60 hover:bg-[#1A212B]'
                }`}
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#7AA2FF]" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              {/* Mailto Send Button */}
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#7AA2FF] text-black font-semibold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#99BAFF] transition-all shadow-md shadow-[#7AA2FF]/20"
                aria-label="Send email via default client"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send</span>
              </a>
            </div>
          </div>

          {/* Location & Academic Meta Banner */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-500 mb-8">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#7AA2FF]" />
              {contact.college}
            </span>
            <span className="opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7AA2FF]" />
              {contact.location}
            </span>
          </div>

          {/* Social Profiles Cluster */}
          {contact.socials && contact.socials.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {contact.socials.map((social) => {
                const IconComponent = socialIcons[social.name] || ExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#12161C] dark:bg-[#12161C] light:bg-white border border-[#222730] dark:border-[#222730] light:border-slate-300 text-xs font-mono text-[#9CA3AF] hover:text-[#7AA2FF] hover:border-[#7AA2FF]/50 transition-all duration-200 flex items-center gap-2.5 group shadow-sm hover:-translate-y-0.5"
                    aria-label={`Visit ${social.name} Profile`}
                  >
                    <IconComponent className="w-4 h-4 text-[#7AA2FF] group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-[#7AA2FF] transition-colors">
                      {social.name}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF] opacity-75">
                      {social.handle}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
