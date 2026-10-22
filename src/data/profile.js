/**
 * Profile Data Configuration
 * Central source of truth for Abdul Muhaiman's portfolio & digital identity.
 * All information is editable here.
 */

export const profileData = {
  name: "Abdul Muhaiman Basha",
  initials: "AMB",
  title: "AI & DATA SCIENCE STUDENT",
  roleTagline: "DEVELOPER · CREATIVE · AUTOMOTIVE ENTHUSIAST",
  greeting: "HELLO, WORLD. I'M",
  
  heroIntro: "I build digital experiences, explore intelligent systems, and bring ideas to life through technology and creativity.",
  
  personalStatement: "Curious by nature. Driven to build. Always learning.",
  
  aboutBio: [
    "I am an Artificial Intelligence and Data Science undergraduate student at Sri Venkateswara College of Engineering (SVCE), Chennai. My work revolves around exploring intelligent algorithms, architecting clean web experiences, and exploring where computer science intersects with modern design.",
    "Beyond software engineering, I am passionate about automotive technology and high-performance cars, and cinematic visual storytelling through photography, videography, and video editing."
  ],
  
  infoPanels: [
    {
      id: "education",
      label: "Education",
      title: "B.Tech in Artificial Intelligence & Data Science",
      subtitle: "Sri Venkateswara College of Engineering (SVCE), Chennai",
      badge: "Undergraduate",
      icon: "GraduationCap"
    },
    {
      id: "focus",
      label: "Areas of Interest",
      title: "AI, Data Science & Modern Web",
      subtitle: "Machine learning algorithms, full-stack web applications, database architecture",
      badge: "Core Focus",
      icon: "Cpu"
    },
    {
      id: "learning",
      label: "Current Learning Goals",
      title: "Deep Learning & Production Systems",
      subtitle: "Expanding into advanced neural networks, production API design, and distributed data",
      badge: "Active",
      icon: "Sparkles"
    },

  ],

  
  contact: {
    heading: "LET'S BUILD SOMETHING.",
    subheading: "I'm open to connecting with people working on interesting ideas, technology, and creative projects.",
    // NOTE: Replace with your actual email address
    email: "muhaimanbasha@gmail.com", 
    isEmailPlaceholder: false,
    location: "Chennai, Tamil Nadu, India",
    college: "Sri Venkateswara College of Engineering (SVCE), Chennai",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    
    // Social Links
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdul-muhaiman-basha-a82b54253/",
        handle: "Abdul Muhaiman Basha",
        isPlaceholder: false
      },
      {
        name: "GitHub",
        url: "https://github.com/abdu08-max",
        handle: "@abdu08-max",
        isPlaceholder: false
      }
    ],

    
    // Resume PDF configuration
    // Set hasCustomPdf to true and drop your resume file into public/Abdul_Muhaiman_Basha_Resume.pdf
    hasCustomPdf: true,
    resumePdfPath: "/Abdul_Muhaiman_Basha_Resume.pdf"
  }
};


