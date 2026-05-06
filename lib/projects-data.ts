// Edit this file to add, remove, or update projects shown on the Projects page.
export type ProjectStatus = "in-progress" | "shipped" | "archived"

export interface ProjectItem {
  id: number
  title: string
  description: string
  tags: string[]
  status: ProjectStatus
  year: string
  stars: number
  forks: number
  url: string
  homepage?: string
  featured: boolean
  highlight?: boolean
}

export const projects: ProjectItem[] = [
  {
    id: 0,
    title: "EinUI",
    description:
      "A collection of beautiful, ready-made Liquid Glass UI components you can preview, copy, and drop into any web app. Built on Tailwind, shadcn/ui, and Radix UI primitives.",
    tags: ["TypeScript", "Next.js 16", "shadcn", "Radix UI", "Tailwind"],
    status: "in-progress",
    year: "2025",
    stars: 8,
    forks: 1,
    url: "https://github.com/ehsanghaffar/einui",
    homepage: "https://ui.eindev.ir",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "EinBioGPT",
    description:
      "An intelligent web application built with Next.js, Tailwind CSS, and OpenAI's GPT models. Generates engaging and personalized bios for social media platforms.",
    tags: ["TypeScript", "Next.js", "GPT", "LangChain"],
    status: "shipped",
    year: "2023",
    stars: 17,
    forks: 8,
    url: "https://github.com/ehsanghaffar/einbiogpt",
    homepage: "https://bio.eindev.ir/",
    featured: true,
  },
  {
    id: 2,
    title: "JavaScript Playground",
    description:
      "A collection of JavaScript code snippets, algorithms, and mini-projects for learning and reference purposes.",
    tags: ["JavaScript", "Algorithms", "Snippets"],
    status: "shipped",
    year: "2020",
    stars: 19,
    forks: 5,
    url: "https://github.com/ehsanghaffar/javascript-playground",
    featured: false,
  },
  {
    id: 3,
    title: "Next.js 16 Docker Starter",
    description:
      "A batteries-included starter for building Next.js 16.1.0 apps with App Router, PNPM, Tailwind v4+, Next-Auth v5, and multi-stage Docker setup.",
    tags: ["Next.js 16.1.0", "Docker", "Tailwind v4"],
    status: "in-progress",
    year: "2025",
    stars: 8,
    forks: 4,
    url: "https://github.com/ehsanghaffar/next16-docker-tw4-starter",
    homepage: "https://nextjs-16-docker.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Awesome Clubhouses",
    description:
      "Curated list of resources for Clubhouse, the voice-based social network where people come together to talk, listen and learn.",
    tags: ["Python", "Awesome List", "Social"],
    status: "archived",
    year: "2022",
    stars: 41,
    forks: 8,
    url: "https://github.com/ehsanghaffar/awesome-clubhouse",
    homepage: "https://ehsanghaffar.github.io/awesome-clubhouse/",
    featured: false,
  },
  {
    id: 5,
    title: "LLM Practice",
    description:
      "A self-hosted personal chatbot API with FastAPI. Interact with Llama2 and other open-source LLMs for natural language conversations.",
    tags: ["Python", "FastAPI", "Llama2", "MCP"],
    status: "shipped",
    year: "2023",
    stars: 13,
    forks: 3,
    url: "https://github.com/ehsanghaffar/llm-practice",
    featured: false,
  },
  {
    id: 6,
    title: "Hand-Build Linux",
    description:
      "A minimal, customizable Linux distribution built from scratch using the Linux kernel, BusyBox, and Syslinux bootloader.",
    tags: ["Shell", "Linux", "Docker"],
    status: "in-progress",
    year: "2025",
    stars: 8,
    forks: 1,
    url: "https://github.com/ehsanghaffar/handbuilt-linux",
    featured: true,
  },
  {
    id: 7,
    title: "Next.js AppDir Template",
    description:
      "An all-inclusive Next.js web application template showcasing seamless integration of Next.js, Docker, MongoDB, and Tailwind CSS.",
    tags: ["TypeScript", "Next.js", "Docker", "MongoDB"],
    status: "shipped",
    year: "2023",
    stars: 19,
    forks: 6,
    url: "https://github.com/ehsanghaffar/nextjs-appdir-docker",
    featured: false,
  },
]
