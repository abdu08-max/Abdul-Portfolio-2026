import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'positions', 'timeline', 'resume', 'contact'];

export default function App() {
  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-[#0B0D10] dark:bg-[#0B0D10] light:bg-[#F8F9FA] text-[#F5F5F5] dark:text-[#F5F5F5] light:text-[#0F172A] selection:bg-[#7AA2FF]/25 selection:text-[#7AA2FF] transition-colors duration-300">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Positions />
        <Timeline />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
