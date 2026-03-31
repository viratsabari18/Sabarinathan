// data/portfolioData.ts

export interface Education {
  period: string;
  institution: string;
  degree: string;
  score: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  points: string[];
  tools?: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    address: string;
    linkedin: string;
  };
  profileSummary: string;
  homeSummary: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  projects: Project[];
  tools: string[];
}

const portfolioData: PortfolioData = {
  personalInfo: {
    name: "SABARINATHAN S",
    title: "FULL STACK DEVELOPER",
    phone: "+91 9345772036",
    email: "sabarivirat2@gmail.com",
    address: "Musiri, Trichy, Tamilnadu",
    linkedin: "sabarinathan-s"
  },

  profileSummary:
    "Passionate Full Stack Developer with 1.5 years of experience in building scalable mobile and web applications. Specialized in Flutter, React, and modern web technologies. Strong expertise in cross-platform development, API integration, and delivering high-performance solutions.",

  homeSummary:
    "I transform ideas into powerful digital experiences. With expertise in Flutter, React, and modern web technologies, I build applications that are not just functional but delightful to use.",

  education: [
    {
      period: "2021-2024",
      institution: "GOVERNMENT COLLEGE OF ENGINEERING, SRIRANGAM",
      degree: "Computer Science And Engineering",
      score: "GPA: 7.8 / 10.0"
    },
    {
      period: "2018-2021",
      institution: "GOVERNMENT POLYTECHNIC COLLEGE TRICHY",
      degree: "Computer Science",
      score: "PER: 83%"
    }
  ],

  experience: [
    {
      company: "Brewszila Technologies Pvt. Ltd.",
      position: "Mobile App Developer",
      period: "2024 - 2026",
      points: [
        "Led development of cross-platform mobile and web applications using Flutter, Go, React, and GraphQL.",
        "Built scalable architecture and optimized API integrations for smooth data flow.",
        "Collaborated with teams to deliver high-quality, user-friendly interfaces."
      ]
    }
  ],

  skills: [
    "Flutter",
    "Go",
    "React",
    "Svelte",
    "TypeScript",
    "GraphQL",
    "REST API",
    "Node.js",
    "SQL",
    "Dart",
    "JavaScript"
  ],

  projects: [
    {
      name: "Brewszila App",
      description: "Cross-platform mobile application",
      points: [
        "Developed a cross-platform mobile application using Flutter for Android and iOS.",
        "Integrated GraphQL APIs for real-time data handling.",
        "Built reusable and scalable UI components."
      ],
      tools: ["Flutter", "Go", "GraphQL", "Dart"]
    },
    {
      name: "FieldForce Offline First App",
      description: "Offline-first task management mobile application",
      points: [
        "Built an offline-first Flutter app with automatic background sync.",
        "Implemented queue-based sync (CREATE, UPDATE, DELETE) for reliability.",
        "Used Hive for local storage and Firebase Firestore for cloud sync.",
        "Developed SyncManager for handling background operations.",
        "Added GetX-based reactive UI with sync status and search."
      ],
      tools: ["Flutter", "Dart", "Hive", "Firebase Firestore", "GetX"]
    },
    {
      name: "AI Resume Analyzer",
      description: "AI-powered resume analysis application",
      points: [
        "Built an AI-powered resume analyzer using Flutter and Node.js backend.",
        "Implemented PDF parsing and integrated Gemini API for ATS scoring and analysis.",
        "Generated structured insights including strengths, weaknesses, and skill gaps.",
        "Designed REST API for resume upload and real-time AI processing.",
        "Handled JSON parsing, error handling, and seamless frontend-backend integration."
      ],
      tools: ["Flutter", "Node.js", "Express", "Gemini API", "REST API"]
    },
    {
      name: "Task & Attendance Management System",
      description: "Employee attendance and task tracking system",
      points: [
        "Developed Flutter frontend with Go backend for attendance tracking.",
        "Built REST APIs using Gorilla Mux and GORM.",
        "Implemented JWT authentication and role-based authorization.",
        "Managed attendance logs and secure user workflows."
      ],
      tools: ["Flutter", "Go", "GORM", "Gorilla Mux", "JWT", "REST API"]
    },
    {
      name: "Brewszila CMS",
      description: "Web-based content management system",
      points: [
        "Developed a React-based admin dashboard for managing outlets and data.",
        "Implemented GraphQL services for efficient data operations.",
        "Added validations, file uploads, and improved admin workflows."
      ],
      tools: ["React", "Go", "GraphQL", "JavaScript"]
    }
  ],

  tools: [
    "Flutter",
    "React",
    "Go",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "REST API",
    "Firebase",
    "Git",
    "VS Code",
    "Android Studio",
    "Postman"
  ]
};

export default portfolioData;
