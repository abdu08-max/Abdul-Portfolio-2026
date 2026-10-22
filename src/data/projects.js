/**
 * Projects Data Configuration
 * Detailed data for the showcase cards and interactive modal dialog.
 * Status options: 'Completed' | 'In Progress' | 'Concept'
 *
 * links.isGithubAvailable — set true only when a real public repository URL exists.
 * links.isDemoAvailable   — set true only when a deployed live URL exists.
 */

export const projectsData = [
  {
    id: "gearnest",
    title: "GearNest",
    category: "Automotive Media & Car-Launch Platform",
    subtitle: "Indian Automotive Media & Car-Launch Platform",
    tagline: "Connecting automotive enthusiasts with launch schedules, vehicle telemetry, and editorial reviews.",
    description: "An automotive news and car-launch platform focused on the Indian automotive market, aggregating launch dates, technical specifications, and editorial content in a performance-first dark-mode interface.",
    status: "In Progress",
    featured: true,
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    links: {
      github: "",
      demo: "",
      isGithubAvailable: false,
      isDemoAvailable: false
    },
    details: {
      overview: "GearNest is a dedicated digital automotive portal tailored specifically for car enthusiasts, buyers, and industry followers across India. It aggregates upcoming vehicle launch dates, official technical specifications, price ranges, and curated automotive journalism into a sleek, editorial dark-mode interface.",
      problem: "Automotive media in India is heavily fragmented and often burdened with slow load times, aggressive popup advertisements, and disorganized spec comparisons, making it cumbersome for enthusiasts to track upcoming releases accurately.",
      approach: "Built with a performance-first mindset using React and Vite, GearNest leverages a luxury automotive aesthetic inspired by supercar telemetry dashboards. Layouts prioritize clean typography, high-resolution imagery, and fast vehicle search/comparison metrics.",
      keyFeatures: [
        "Comprehensive upcoming Indian car-launch timeline & countdowns",
        "Technical specification matrix (0-100 km/h, BHP, torque, range)",
        "Editorial review articles and automotive photography spotlight",
        "Responsive, dark cinematic layout optimized for mobile car buyers"
      ],
      technologiesUsed: [
        "React for component modularity",
        "Tailwind CSS for streamlined dark-mode luxury styling",
        "Vite for sub-second build and development cycles",
        "Modern CSS grid and flexbox for responsive vehicle spec tables"
      ],
      lessonsLearned: "Sharpened architectural skills for media-dense interfaces, responsive imagery optimization, and designing high-contrast automotive typography hierarchies."
    }
  },
  {
    id: "upi-scam-detection",
    title: "UPI Scam Detection Assistant",
    category: "AI-Assisted Fraud Protection Concept",
    subtitle: "AI-Assisted Fraud Protection Concept",
    tagline: "Heuristic and behavioral warning engine concept to safeguard users against fraudulent UPI payment requests.",
    description: "A conceptual prototype for analyzing transaction information and warning users about potentially fraudulent UPI payments. This is an architectural concept — not a deployed fraud-detection system.",
    status: "Concept",
    featured: true,
    technologies: ["Python", "Security Heuristics", "Pattern Recognition"],
    links: {
      github: "",
      demo: "",
      isGithubAvailable: false,
      isDemoAvailable: false
    },
    details: {
      overview: "The UPI Scam Detection Assistant is a research and architectural concept designed to introduce intelligent fraud pre-screening into India's Unified Payments Interface ecosystem. It analyzes transaction parameters to alert users before authorizing suspicious payments. This is a conceptual prototype, not a production-deployed system.",
      problem: "With billions of instant digital transactions happening monthly across India, fraudsters frequently exploit social engineering, deceptive 'collect money' requests, fake QR codes, and lookalike merchant VPA handles to deceive unsuspecting citizens.",
      approach: "The proposed architecture analyzes incoming payment requests across multiple risk dimensions: merchant verification status, handle similarity to known institutions (typosquatting), sudden high-value collect requests, and velocity patterns. It flags anomalies with clear, understandable visual risk scores.",
      keyFeatures: [
        "Risk scoring engine concept (0–100% confidence scale)",
        "Lookalike VPA detection (distinguishing real bank handles from spoofed handles)",
        "Suspicious 'Collect Request' heuristic analyzer",
        "Exploratory threat visualization dashboard concept"
      ],
      technologiesUsed: [
        "Python for anomaly detection logic and data analysis prototypes",
        "Pattern recognition heuristics for string similarity and handle verification",
        "Security heuristics for behavioral anomaly flagging"
      ],
      lessonsLearned: "Gained deep insights into security ergonomics — how to warn users about critical financial risks without generating alarm fatigue or degrading usability."
    }
  },
  {
    id: "atm-management-system",
    title: "ATM Machine Management System",
    category: "Python & MySQL Academic Project",
    subtitle: "Python & MySQL Academic Banking Engine",
    tagline: "Academic simulation of transactional banking operations with ACID compliance and relational logging.",
    description: "An academic project using Python and MySQL to demonstrate ATM-related operations and database management, including multi-user authentication, transactions, and relational schema design.",
    status: "Completed",
    featured: true,
    technologies: ["Python", "MySQL", "Relational Database Design"],
    links: {
      github: "",
      demo: "",
      isGithubAvailable: false,
      isDemoAvailable: false
    },
    details: {
      overview: "An academic software engineering project built to demonstrate end-to-end relational database management, session authentication, and transactional ledger operations through an ATM terminal simulation.",
      problem: "Academic simulations of banking systems often fail to address transaction rollbacks, race conditions during concurrent balance deductions, and audit logging required for financial accountability.",
      approach: "Engineered a modular Python backend connected to a normalized MySQL relational database schema. Implemented explicit transaction commits and rollbacks to guarantee ACID properties, along with parameterized SQL queries to prevent injection vulnerabilities.",
      keyFeatures: [
        "Multi-user PIN authentication with retry limit lockout",
        "Balance enquiry, cash withdrawal, deposit, and funds transfer workflows",
        "Real-time balance deduction with rollback on insufficient funds",
        "Detailed transactional statement logging with timestamps and reference IDs",
        "Admin console for ATM cash inventory management and ledger audits"
      ],
      technologiesUsed: [
        "Python (3.x) core modules and MySQL database connector",
        "MySQL relational database with normalized customer and transaction tables",
        "SQL parameterized queries and transaction control (COMMIT/ROLLBACK)"
      ],
      lessonsLearned: "Cemented solid fundamentals in database integrity, relational schema design, SQL constraints, and defensive programming in backend state machines."
    }
  }
];
