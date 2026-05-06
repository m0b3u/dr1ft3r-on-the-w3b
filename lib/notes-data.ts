export const noteCategories = ["Linux", "Networking", "Web Security", "Blue Team", "CTF", "Tools", "Homelab"] as const

export type NoteCategory = (typeof noteCategories)[number]

export type Note = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: NoteCategory
  tags: string[]
  color: string
  readTime: string
}

export const notes: Note[] = [
  {
    id: 1,
    title: "Linux service hardening checklist",
    excerpt:
      "A compact checklist for reviewing users, services, ports, logs, and permissions before exposing a box to the network.",
    content:
      "Working checklist covering service discovery, least privilege, firewall rules, log review, and rollback notes.",
    date: "May 2026",
    category: "Linux",
    tags: ["Linux", "Blue Team", "Tools"],
    color: "from-blue-500/20 to-cyan-500/20",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "Network mapping from the inside out",
    excerpt:
      "Notes on mapping a small lab network, identifying trust boundaries, and documenting what each service actually exposes.",
    content:
      "A field note on inventory, subnets, ports, hostnames, and the difference between intended and observed exposure.",
    date: "May 2026",
    category: "Networking",
    tags: ["Networking", "Homelab", "Tools"],
    color: "from-cyan-500/20 to-emerald-500/20",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Web security recon habits",
    excerpt:
      "A repeatable first-pass workflow for headers, cookies, forms, routes, and obvious misconfigurations in small web apps.",
    content:
      "A starter recon routine for web apps, focused on observable behavior before deeper testing.",
    date: "May 2026",
    category: "Web Security",
    tags: ["Web Security", "CTF", "Tools"],
    color: "from-primary/20 to-purple-500/20",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Blue team triage notes",
    excerpt:
      "A lightweight incident-notes format for separating signals, assumptions, evidence, and next actions.",
    content:
      "A practical triage template for logs, timelines, evidence, containment, and lessons learned.",
    date: "May 2026",
    category: "Blue Team",
    tags: ["Blue Team", "Linux", "Networking"],
    color: "from-indigo-500/20 to-blue-500/20",
    readTime: "5 min",
  },
  {
    id: 5,
    title: "CTF writeup skeleton",
    excerpt:
      "A clean structure for capture-the-flag notes: enumeration, hypotheses, exploit path, proof, and cleanup.",
    content:
      "A reusable CTF writeup shape that keeps the path readable without hiding the false starts.",
    date: "May 2026",
    category: "CTF",
    tags: ["CTF", "Web Security", "Linux"],
    color: "from-yellow-500/20 to-orange-500/20",
    readTime: "4 min",
  },
  {
    id: 6,
    title: "Toolbox audit",
    excerpt:
      "A running inventory of trusted tools, aliases, scripts, and commands worth keeping close in the lab.",
    content:
      "Tooling notes for shell workflows, scanners, formatters, and documentation helpers.",
    date: "May 2026",
    category: "Tools",
    tags: ["Tools", "Linux", "Homelab"],
    color: "from-orange-500/20 to-amber-500/20",
    readTime: "5 min",
  },
  {
    id: 7,
    title: "Homelab exposure review",
    excerpt:
      "A practical pass over local services, DNS, tunnels, dashboards, credentials, and backups.",
    content:
      "A homelab review note for keeping useful services reachable without turning the lab into accidental production.",
    date: "May 2026",
    category: "Homelab",
    tags: ["Homelab", "Networking", "Blue Team"],
    color: "from-emerald-500/20 to-teal-500/20",
    readTime: "6 min",
  },
]

export const noteFilters = ["all", ...noteCategories]
export const noteTags = [...new Set(notes.flatMap((note) => note.tags))]
