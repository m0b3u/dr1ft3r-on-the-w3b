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
    title: "Stackwarden",
    description:
      "A future security operations platform concept for small teams: unify alert triage, host telemetry, and response playbooks in one lightweight command center.",
    tags: ["Cybersecurity", "SOC", "Blue Team", "SIEM", "Concept"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    homepage: "TODO_PROJECT_URL",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Hardening Lab",
    description:
      "Baseline hardening profiles and validation scripts for Ubuntu and Debian servers, with practical CIS-inspired checks for homelab and small infra.",
    tags: ["Linux", "Sysadmin", "Bash", "Hardening"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: true,
  },
  {
    id: 2,
    title: "Packet Trail",
    description:
      "A networking and packet-analysis notebook repo with tcpdump/Wireshark walkthroughs for common troubleshooting and threat-hunting patterns.",
    tags: ["Networking", "Wireshark", "tcpdump", "Blue Team"],
    status: "shipped",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: false,
  },
  {
    id: 3,
    title: "CTF Writeups",
    description:
      "Beginner-friendly CTF writeups covering web exploitation, Linux privilege escalation, and forensic basics with reproducible steps.",
    tags: ["CTF", "Web Security", "Forensics", "Linux"],
    status: "shipped",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: true,
  },
  {
    id: 4,
    title: "Homelab Sentinel",
    description:
      "Homelab monitoring stack templates (logs, uptime, and host metrics) designed to surface suspicious behavior and service regressions quickly.",
    tags: ["Homelab", "Infrastructure", "Monitoring", "Security"],
    status: "in-progress",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: false,
  },
  {
    id: 5,
    title: "Web Audit Checklist",
    description:
      "A practical checklist and test cases for common web security issues (auth flaws, input validation, session handling, and headers).",
    tags: ["Web Security", "OWASP", "AppSec", "Checklist"],
    status: "shipped",
    year: "2026",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: false,
  },
  {
    id: 6,
    title: "Infra Incident Drills",
    description:
      "Tabletop incident response scenarios for ransomware, exposed credentials, and misconfigured cloud services tailored to small teams.",
    tags: ["Incident Response", "Security Operations", "Infrastructure"],
    status: "archived",
    year: "2025",
    stars: 0,
    forks: 0,
    url: "TODO_GITHUB",
    featured: false,
  },
]
