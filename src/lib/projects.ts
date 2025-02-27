import { z } from "zod"

const projectSchema = z.object({
  id: z.string(),
  repo: z.string(),
  link: z.string(),
  description: z.string(),
  shortDesc: z.string(), // Added shortDesc field
  period: z.string().optional(),
  achievements: z.array(z.string()),
  technologies: z.array(z.string())
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: "mynd",
      repo: "mynd",
      link: "https://github.com/devansh1401/Mynd",
      shortDesc: "ai journaling", // Added short description
      description:
        "mynd: ai-powered journaling app for emotional insights and deeper you✨",
      period: "jun 2024",
      achievements: [
        "developed ai-powered journaling app with sentiment analysis",
        "built interactive mood tracking system",
        "enhanced ai parsing accuracy by 30% using zod and langchain"
      ],
      technologies: [
        "next.js",
        "typescript",
        "Langchain",
        "Neon DB",
        "Prisma ORM",
        "Groq AI"
      ]
    },
    {
      id: "cognitive web",
      repo: "cognitive web 🧠",
      link: "https://github.com/devansh1401/CognitiveWeb",
      shortDesc: "rag chatbot", // Added short description
      description:
        "groq-gemini powered rag chatbot with langchain: chat with any website in real-time",
      period: "may 2024",
      achievements: [
        "implemented rag architecture with real-time web search",
        "optimized response time by 30% with efficient similarity retrieval",
        "learned about vector dbs it's architecture and advanced nlp techniques"
      ],
      technologies: [
        "Python",
        "Gemini",
        "Chroma DB",
        "Streamlit",
        "Open AI Embeddings"
      ]
    },
    {
      id: "rocket & meteors",
      repo: "rocket & meteors ☄️",
      link: "https://github.com/devansh1401/Rocket_Meteors",
      shortDesc: "terminal game", // Added short description
      description: "A cool game to get you nostalgia right from your terminal",
      period: "july 2023 - sep 2023",
      achievements: [
        "created terminal-based game using ncurses for real-time rendering",
        "implemented collision detection system",
        "optimized input handling with low-latency keyboard event capture"
      ],
      technologies: ["c++", "ncurses", "ascii art"]
    },
    {
      id: "PropX",
      repo: "propX",
      link: "https://github.com/devansh1401/Prop-X",
      shortDesc: "blockchain realty", // Added short description
      description: "secure and transparent real estate on the blockchain.",
      period: "april 2024",
      achievements: [
        "built smart contracts for property transactions",
        "integrated metamask authentication",
        "created verification system for property listings"
      ],
      technologies: ["solidity", "web3.js", "react", "ethereum", "typescript"]
    },
    {
      id: "Flow Fields",
      repo: "flow fields 🌊",
      link: "https://devansh1401.github.io/flow-fields/",
      shortDesc: "particle animation", // Added short description
      description:
        "your brain on flow fields: a visual symphony of particles in motion",
      period: "march 2024",
      achievements: [
        "created interactive particle system with canvas api",
        "optimized for 10k+ simultaneous particles",
        "implemented customizable flow parameters"
      ],
      technologies: ["perlin noice", "html canvas", "mathematics", "javascript"]
    },
    {
      id: "Meee",
      repo: "meee",
      link: "https://github.com/devansh1401/meee",
      shortDesc: "portfolio site", // Added short description
      description: "*my personal portfolio website * yup, i built this.",
      period: "jun 2024 - present",
      achievements: [
        "designed and built personal portfolio",
        "implemented custom animations and transitions",
        "achieved 96+ lighthouse score"
      ],
      technologies: ["astro", "typescript", "uno css", "framer motion"]
    }
  ]
}
