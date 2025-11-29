// data/portfolioData.ts - Updated with Bangalore location
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
  homeSummary: string; // New field for different home content
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
    address: "Musiri,Trichy,Tamilnadu",
    linkedin: "sabarinathan-s"
  },
  profileSummary: "Passionate Full Stack Developer with 1 years of experience in building scalable mobile and web applications. Specialized in Flutter, React, and modern web technologies. Strong expertise in cross-platform development, API integration, and delivering high-performance solutions. Always eager to learn new technologies and solve complex problems.",
  homeSummary: "I transform ideas into powerful digital experiences. With expertise in Flutter, React, and modern web technologies, I build applications that are not just functional but delightful to use. My passion lies in creating solutions that make a real impact.",
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
      period: "2025 - PRESENT",
      points: [
        "Led the end-to-end development and deployment of cross-platform mobile and web applications using Flutter, Svelte, and GraphQL, enhancing overall performance and user experience.",
        "Implemented scalable architecture and efficient API integrations, streamlining data flow across multiple modules for smooth functionality.",
        "Collaborated with cross-functional teams to design and deliver intuitive, high-quality interfaces aligned with business goals and user needs."
      ]
    }
  ],
  skills: [
    "Flutter", "Svelte", "React", "TypeScript", "GraphQL",
    "REST API", "Node.js", "SQL", "Dart", "JavaScript"
  ],
  projects: [
    {
      name: "Brewszila App",
      description: "Cross-platform mobile application",
      points: [
        "Developed a cross-platform mobile application using Flutter, delivering a seamless and engaging user experience across Android and iOS.",
        "Integrated GraphQL APIs for dynamic data handling, improving responsiveness and real-time updates throughout the app.",
        "Designed and optimized modular UI components, enabling scalable development and consistent design across multiple features."
      ],
      tools: ["Flutter", "GraphQL", "Dart"]
    },
    {
      name: "Brewszila CMS",
      description: "Web-based content management system",
      points: [
        "Developed a Svelte-based web dashboard to manage outlets, menus, documents, and user data through a clean and responsive interface.",
        "Implemented GraphQL integrations and modular services, ensuring secure and efficient data operations across multiple modules.",
        "Enhanced admin workflows with real-time validations, file uploads, and automated syncing, improving overall system usability and reliability."
      ],
      tools: ["Svelte", "GraphQL", "JavaScript"]
    }
  ],
  tools: [
    "Postman/Bruno", "Hasura", "TablePlus", "PostgreSQL",
    "Keyclock", "Firebase"
  ]
};

export default portfolioData;