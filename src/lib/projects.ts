import { z } from "zod"

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
  period: z.string().optional(),
  achievements: z.array(z.string()),
  technologies: z.array(z.string())
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "mynd",
      link: "https://github.com/devansh1401/Mynd",
      description:
        "mynd: ai-powered journaling app for emotional insights and deeper you✨",
      period: "jun 2023 - present",
      achievements: [
        "built full-stack journaling app with emotion analysis",
        "integrated openai api for mood detection",
        "deployed to vercel with 99.9% uptime"
      ],
      technologies: [
        "next.js",
        "typescript",
        "tailwind css",
        "openai",
        "mongodb"
      ]
    },
    {
      repo: "cognitive web 🧠",
      link: "https://github.com/devansh1401/CognitiveWeb",
      description:
        "groq-gemini powered rag chatbot with langchain: chat with any website in real-time",
      period: "feb 2023 - may 2023",
      achievements: [
        "implemented rag architecture with langchain",
        "optimized response times by 40%",
        "added support for 10+ file formats"
      ],
      technologies: ["langchain", "groq", "gemini", "react", "node.js"]
    },
    // Add similar data for your other projects
    {
      repo: "rocket & meteors ☄️",
      link: "https://github.com/devansh1401/Rocket_Meteors",
      description: "A cool game to get you nostalgia right from your terminal",
      period: "dec 2022 - jan 2023",
      achievements: [
        "created terminal-based game with ascii graphics",
        "implemented collision detection system",
        "added custom difficulty levels"
      ],
      technologies: ["python", "pygame", "ascii art"]
    },
    {
      repo: "propX",
      link: "https://github.com/devansh1401/Prop-X",
      description: "secure and transparent real estate on the blockchain.",
      period: "aug 2022 - nov 2022",
      achievements: [
        "built smart contracts for property transactions",
        "integrated metamask authentication",
        "created verification system for property listings"
      ],
      technologies: ["solidity", "web3.js", "react", "ethereum", "metamask"]
    },
    {
      repo: "flow fields 🌊",
      link: "https://devansh1401.github.io/flow-fields/",
      description:
        "your brain on flow fields: a visual symphony of particles in motion",
      period: "jul 2022 - aug 2022",
      achievements: [
        "created interactive particle system with canvas api",
        "optimized for 10k+ simultaneous particles",
        "implemented customizable flow parameters"
      ],
      technologies: ["javascript", "html canvas", "p5.js", "creative coding"]
    },
    {
      repo: "meee",
      link: "https://github.com/devansh1401/meee",
      description:
        "*scrolls through website with shades on * yup, i built this.",
      period: "jun 2022 - jul 2022",
      achievements: [
        "designed and built personal portfolio",
        "implemented custom animations and transitions",
        "achieved 95+ lighthouse score"
      ],
      technologies: ["astro", "typescript", "tailwind css", "framer motion"]
    }
  ]
}
