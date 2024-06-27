import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "mynd ",
      link: "https://github.com/devansh1401/Mynd",
      description: "mynd: ai-powered journaling app for emotional insights and deeper you✨",
    },
    {
      repo: "cognitive web 🧠",
      link: "https://github.com/devansh1401/CognitiveWeb",
      description: "groq-gemini powered rag chatbot with langchain: chat with any website in real-time",
    },
    {
      repo: "rocket & meteors ☄️",
      link: "https://github.com/devansh1401/Rocket_Meteors",
      description: "A cool game to get you nostalgia right from your terminal",
    },
    {
      repo: "propX",
      link: "https://github.com/devansh1401/Prop-X",
      description: "secure and transparent real estate on the blockchain.",
    },
    {
      repo: "flow fields 🌊",
      link: "https://devansh1401.github.io/flow-fields/",
      description: "your brain on flow fields: a visual symphony of particles in motion",
    },
    {
      repo: "meee",
      link: "https://github.com/devansh1401/meee",
      description: "*scrolls through website with shades on * yup, i built this.",
    },
  ];
}
