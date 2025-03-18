// Define types for our work experience data
export interface WorkItem {
  period: string
  role: string
  company: string
  companyUrl?: string
  location?: string
  description?: string
  bulletPoints?: string[]
  backedProjects?: string[]
}

// Export the work experience data
export const workExperience: WorkItem[] = [
  {
    period: "May 2024 — Present",
    role: "Founding Engineer",
    company: "Leapflow",
    companyUrl: "https://leapflow.tech", // Update with actual URL
    location: "Remote",
    description:
      "Developed AI-powered workflows and automation tools for improving team efficiency across multiple platforms.",
    bulletPoints: [
      "Built a backend-first framework that dynamically generates UIs from Node.js logic, eliminating the need for custom frontend development and simplifying internal tool creation.",
      "Engineered an enterprise-grade SDK with asynchronous execution patterns, comprehensive validation systems, and type safety that transforms business logic into production-ready applications with minimal code.",
      "Developed a stateless UI generation pipeline that transforms backend function signatures into reactive components through Asynchronous I/O patterns and RESTful event propagation without requiring traditional frontend frameworks."
    ]
  },
  {
    period: "Jul 2024 — Dec 2024",
    role: "Software Development Engineer Intern",
    company: "MagicSlides App",
    companyUrl: "https://magicslides.app", // Update with actual URL
    location: "Remote",
    description:
      "Built and integrated features for an app with 1.4M+ users, focusing on UI/UX improvements and system architecture.",
    bulletPoints: [
      "Built and integrated key features into an app with 1.4M+ users, including user authentication and system architecture improvements.",
      "Developed an interactive canvas-based app using Fabric.js and Next.js, empowering users to customize AI-generated presentations.",
      "Launched a sub-product with significant recurring revenue, automating testing workflows that reduced QA time by 20%."
    ]
  }
]

// Example of how to add future entries:
/*
  {
    period: "Future Start — Future End",
    role: "Your Role",
    company: "Company Name",
    companyUrl: "https://company-website.com",
    location: "Location",
    description: "Brief overview of your responsibilities",
    bulletPoints: [
      "Key achievement or responsibility 1",
      "Key achievement or responsibility 2",
      "Key achievement or responsibility 3"
    ],
    backedProjects: [  // Only if relevant for this role
      "Project 1",
      "Project 2",
      "Project 3"
    ]
  }
  */
