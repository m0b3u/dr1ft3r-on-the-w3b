export type ProjectStatus = "shipped" | "in-progress" | "archived"

export type Project = {
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

export const projects: Project[] = [
  {
    id: 0,
    title: "Stackwarden",
    description:
      "A security-focused homelab and blue-team project for watching services, documenting exposure, and turning messy infrastructure signals into practical hardening notes.",
    tags: ["Linux", "Networking", "Blue Team", "Homelab", "Tools"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/cyberdr1ft3r",
    homepage: "TODO_PROJECT_URL",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Drift Notes",
    description:
      "A working collection of Linux, networking, web security, CTF, and tooling notes gathered while building and breaking in the lab.",
    tags: ["Linux", "Networking", "Web Security", "CTF"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/cyberdr1ft3r",
    featured: true,
  },
  {
    id: 2,
    title: "Homelab Runbooks",
    description:
      "Repeatable setup and recovery notes for local services, monitoring, backups, and practical defensive experiments.",
    tags: ["Homelab", "Linux", "Tools"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/cyberdr1ft3r",
    featured: false,
  },
]

export const projectFilters: Array<"all" | ProjectStatus> = ["all", "shipped", "in-progress", "archived"]
export const projectTags = [...new Set(projects.flatMap((project) => project.tags))]
