
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
    playStore?: string;
  appStore?: string;

}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    address: string;
    linkedin: string;
    github?: string;
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
    title: "Flutter Developer",
    phone: "+91 9345772036",
    email: "sabarivirat2@gmail.com",
    address: "Bengaluru, Karnataka",
    linkedin: "sabarinathan-s-aaa86437b",
    github: "viratsabari18"
  },

  profileSummary:
    "Flutter Developer with 1.7+ years of experience building scalable Android and iOS applications using Flutter and Dart. Experienced in REST API integration, Firebase, GraphQL, state management (Bloc, Provider, GetX, Riverpod), authentication systems, and Clean Architecture. Proven ability to deliver production-ready mobile applications and collaborate effectively in Agile teams.",

  homeSummary:
    "I build high-performance mobile applications with Flutter. From offline-first architectures and real-time synchronization to scalable production deployments, I focus on creating seamless user experiences across Android and iOS platforms.",

  education: [
    {
      period: "2021 - 2024",
      institution: "GOVERNMENT COLLEGE OF ENGINEERING, SRIRANGAM",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      score: "78%"
    },
    {
      period: "2018 - 2021",
      institution: "GOVERNMENT POLYTECHNIC COLLEGE, TRICHY",
      degree: "Diploma in Computer Science",
      score: "83%"
    }
  ],

  experience: [
    {
      company: "BrewsZilla Technologies",
      position: "Software Engineer — Flutter Developer",
      period: "Aug 2024 - Jan 2026",
      points: [
        "Delivered and enhanced production Flutter applications used by internal teams and external customers.",
        "Designed and implemented 50+ responsive UI screens ensuring consistent user experience across Android and iOS devices.",
        "Integrated 20+ REST API endpoints and implemented Keycloak-based RBAC authentication.",
        "Improved application security and user access management through robust authentication workflows.",
        "Collaborated with designers, QA engineers, and backend developers to reduce feature delivery time by 25%.",
        "Built reusable UI components and adaptive layouts reducing development effort by approximately 30%."
      ]
    },
    {
      company: "IMM Recruitments",
      position: "Flutter Developer Intern",
      period: "Apr 2026 - Jun 2026",
      points: [
        "Developed and enhanced Flutter mobile application modules for Android and iOS platforms using Dart.",
        "Resolved 20+ application bugs improving app stability and reducing user-reported issues.",
        "Optimized UI rendering and API handling reducing screen load times by 30%.",
        "Participated in code reviews and QA testing supporting faster deployments and fewer defects."
      ]
    }
  ],

skills: [
  "Flutter",
  "Dart",
  "Android",
  "iOS",
  "Bloc",
  "Provider",
  "GetX",
  "Riverpod",
  "Redux",
  "Firebase",
  "Firestore",
  "GraphQL",
  "REST APIs",
  "Hive",
  "Keycloak",
  "JWT",
  "Clean Architecture",
  "MVVM",
  "Repository Pattern",
  "React.js",
  "Node.js",
  "Go",
  "JavaScript",
  "SQL",
  "MongoDB"
],

  projects: [
    {
      name: "Unfazzed Service Booking App",
      description: "Production-ready service booking platform",
      points: [
        "Engineered a Flutter application enabling customers to book and manage on-demand services.",
        "Integrated OTP authentication, Firebase services, and 15+ REST APIs for booking, profile, and support functionalities.",
        "Improved application performance through image caching and reusable widget architecture reducing screen load times by 35%.",
        "Collaborated with backend teams to deliver 20+ production-ready features and support smooth deployments."
      ],
      tools: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Provider",
        "SharedPreferences"
      ],

    },

    {
      name: "Unfazzed Professional Provider App",
      description: "Provider platform for service professionals",
      points: [
        "Built a Flutter-based provider platform enabling service professionals to manage bookings, schedules, and customer interactions.",
        "Implemented OTP authentication and Firebase services for secure onboarding and communication.",
        "Developed real-time booking and earnings management workflows improving operational efficiency.",
        "Implemented Provider state management for real-time updates and optimized UI performance."
      ],
 tools: [
  "Git",
  "GitHub Actions",
  "Google Play Console",
  "Postman",
  "Bruno",
  "Android Studio",
  "VS Code",
  "Draw.io",
  "PgAdmin"
]
    },

    {
      name: "BrewsZilla App",
      description: "Published on Google Play Store and Apple App Store",
      points: [
        "Developed production-ready Flutter applications supporting business operations and customer engagement across multiple platforms.",
        "Configured Keycloak authentication and Role-Based Access Control for secure access management.",
        "Built reusable UI components and adaptive layouts while maintaining consistent UI standards.",
        "Worked closely with designers, QA engineers, and backend developers in Agile environments to accelerate feature delivery."
      ],
      tools: [
        "Flutter",
        "Dart",
        "GraphQL",
        "Firebase",
        "Keycloak",
        "Provider"
      ]
    },

    {
      name: "FieldForce Offline First App",
      description: "Offline-first task management application",
      points: [
        "Developed an offline-first Flutter application enabling seamless task management with automatic background synchronization.",
        "Designed a queue-based sync architecture (CREATE, UPDATE, DELETE) ensuring reliable data consistency.",
        "Integrated Hive and Firebase Firestore to support offline-first functionality and cloud synchronization.",
        "Built a SyncManager service to process queued operations and improve synchronization reliability.",
        "Implemented reactive UI updates using GetX including live sync status indicators and dynamic filtering."
      ],
      tools: [
        "Flutter",
        "Dart",
        "Hive",
        "Firebase Firestore",
        "GetX",
        "Bloc"
      ],
              playStore:
    "https://play.google.com/store/apps/details?id=com.bz.brewszilla",
  appStore:
    "https://apps.apple.com/in/app/brewszilla/id6759702114"
    }
  ],

  tools: [
    "Flutter",
    "Dart",
    "Firebase",
    "Firestore",
    "GraphQL",
    "REST APIs",
    "Hive",
    "Bloc",
    "Provider",
    "GetX",
    "Riverpod",
    "Redux",
    "Keycloak",
    "JWT Authentication",
    "Git",
    "GitHub Actions",
    "Google Play Console",
    "Postman",
    "Bruno",
    "Android Studio",
    "VS Code",
    "Draw.io",
    "PgAdmin"
  ]
};

export default portfolioData;
