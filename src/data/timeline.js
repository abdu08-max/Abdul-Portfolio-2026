/**
 * Timeline Data Configuration
 * Chronological education and genuine academic/technical project milestones.
 */

export const timelineCategories = ["All", "Education", "Projects"];

export const timelineData = [
  {
    id: "svce-degree",
    category: "Education",
    title: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Sri Venkateswara College of Engineering (SVCE), Chennai",
    period: "Undergraduate Program",
    status: "In Progress",
    description: "Rigorous curriculum covering foundational Computer Science, Artificial Intelligence, Machine Learning algorithms, Data Structures & Algorithms, Database Management Systems, and Object-Oriented Software Design.",
    highlights: [
      "Department of Artificial Intelligence and Data Science",
      "Hands-on laboratory sessions in Python, SQL, C/C++, and Data Engineering",
      "Active participation in technical symposia and coding hackathons"
    ],
    isPlaceholder: false
  },
  {
    id: "atm-project-timeline",
    category: "Projects",
    title: "ATM Machine Management System",
    institution: "Academic Software Project · SVCE",
    period: "Academic Milestone",
    status: "Completed",
    description: "Built an end-to-end relational database simulation using Python and MySQL, handling secure PIN verification, ACID transactions, and ledger audit logging.",
    highlights: [
      "Demonstrated robust database schema normalization and SQL querying",
      "Implemented transactional integrity and defensive exception handling"
    ],
    isPlaceholder: false
  },
  {
    id: "gearnest-project-timeline",
    category: "Projects",
    title: "GearNest Automotive Platform Development",
    institution: "Independent Project",
    period: "Active Development",
    status: "In Progress",
    description: "Architecting a modern, high-performance automotive media hub for Indian car enthusiasts, focusing on vehicle telemetry data and launch calendars.",
    highlights: [
      "React + Vite frontend with dark-mode luxury automotive aesthetic",
      "Interactive specs comparison tables and responsive UI"
    ],
    isPlaceholder: false
  }
];
