// Edit this file to add, remove, or update notes shown on the Notes page.
export type NoteCategory = "linux" | "networking" | "web-security" | "blue-team" | "ctf" | "tools" | "homelab"

export interface NoteItem {
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

export const notes: NoteItem[] = [
  {
    id: 1,
    title: "Linux file permissions mistakes I keep making",
    excerpt:
      "A beginner-focused checklist for avoiding dangerous chmod/chown patterns and auditing risky SUID/SGID binaries on fresh Linux installs.",
    content: "Command examples, why they matter, and a quick remediation flow for common permission misconfigurations.",
    date: "May 2026",
    category: "linux",
    tags: ["Linux", "Permissions", "Privilege Escalation"],
    color: "from-blue-500/20 to-cyan-500/20",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "My first VLAN segmentation in the homelab",
    excerpt:
      "Notes from splitting a flat home network into separate VLANs for lab servers, personal devices, and IoT gear.",
    content: "What worked, what broke, and the firewall rules that finally made the setup stable.",
    date: "Apr 2026",
    category: "networking",
    tags: ["Networking", "VLAN", "Firewall"],
    color: "from-purple-500/20 to-pink-500/20",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "XSS testing workflow for beginner bug hunters",
    excerpt:
      "A practical routine for finding reflected and stored XSS in small apps, with safe payload testing and browser-side verification.",
    content: "Step-by-step test process mapped to common input points, output contexts, and response validation.",
    date: "Apr 2026",
    category: "web-security",
    tags: ["Web Security", "XSS", "Bug Hunting"],
    color: "from-primary/20 to-purple-500/20",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "Building a tiny blue-team triage playbook",
    excerpt:
      "How I structure first-response triage for suspicious log events: validate, scope, contain, and document.",
    content: "Simple incident notes template and a repeatable triage flow for low-volume environments.",
    date: "Mar 2026",
    category: "blue-team",
    tags: ["Blue Team", "SOC", "Incident Response"],
    color: "from-orange-500/20 to-amber-500/20",
    readTime: "9 min",
  },
  {
    id: 5,
    title: "TryHackMe room notes: enumeration first",
    excerpt:
      "Lessons learned from early CTF rooms: better enumeration, cleaner note-taking, and avoiding rabbit holes.",
    content: "A repeatable command sequence for recon, service checks, and post-exploitation validation.",
    date: "Feb 2026",
    category: "ctf",
    tags: ["CTF", "Enumeration", "Pentesting"],
    color: "from-cyan-500/20 to-blue-500/20",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Security toolkit I use weekly",
    excerpt:
      "A personal shortlist of tools I actually use every week (nmap, Wireshark, Burp, ffuf) and when each one is most useful.",
    content: "Quick usage patterns, default flags, and mistakes I try to avoid as a beginner practitioner.",
    date: "Jan 2026",
    category: "tools",
    tags: ["Tools", "Nmap", "Burp Suite", "ffuf"],
    color: "from-indigo-500/20 to-purple-500/20",
    readTime: "6 min",
  },
  {
    id: 7,
    title: "Homelab backup strategy before security experiments",
    excerpt:
      "How I snapshot and back up lab systems before running risky tests so I can recover fast after failures.",
    content: "A practical backup schedule, retention plan, and restore checks for small self-hosted environments.",
    date: "Jan 2026",
    category: "homelab",
    tags: ["Homelab", "Backups", "Infrastructure"],
    color: "from-emerald-500/20 to-teal-500/20",
    readTime: "7 min",
  },
]
