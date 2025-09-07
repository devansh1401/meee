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
    period: "Jul 2025 — Present",
    role: "System Development Engineer Intern",
    company: "Amazon",
    companyUrl: "https://amazon.com",
    location: "Gurugram, India • Onsite",
    description: "still working :)"
  },
  {
    period: "May 2025 — Sep 2025",
    role: "Student Developer",
    company: "Google Summer of Code - JLab",
    companyUrl:
      "https://summerofcode.withgoogle.com/programs/2025/projects/OPlG0KHV",
    location: "California, United States • Remote",
    description:
      "Contributed to ENTS, a large-scale environmental sensor network platform for a research group at the University of California, Santa Cruz."
  },
  {
    period: "May 2024 — May 2025",
    role: "Founding Engineer",
    company: "Leapflow (now Mocha, pivoted)",
    companyUrl: "https://www.mocha.email/",
    location: "San Francisco • Remote",
    description:
      "Developed a framework that generates UIs from backend logic, enabling rapid creation of enterprise applications without traditional frontend development."
  },
  {
    period: "Jul 2024 — Dec 2024",
    role: "Software Development Engineer Intern",
    company: "MagicSlides App",
    companyUrl: "https://magicslides.app",
    location: "Bangalore, India • Remote",
    description:
      "Built and integrated features for an app with 1.4M+ users, focusing on UI/UX improvements and system architecture."
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
