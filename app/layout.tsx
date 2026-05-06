import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const emojiFavicon = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberdr1ft3r.com'),
  title: {
    default: "Cyber Drifter — cyberdr1ft3r.com",
    template: "%s | Cyber Drifter",
  },
  description:
    "Cybersecurity portfolio, notes, projects, and homelab experiments by cyberdr1ft3r.",
  keywords: ["Cybersecurity", "Linux", "CTFs", "Homelab", "Infrastructure Security", "Web Security"],
  authors: [{ name: "Cyber Drifter", url: "https://github.com/cyberdr1ft3r" }],
  creator: "Cyber Drifter",
  publisher: "Cyber Drifter",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Cyber Drifter — cyberdr1ft3r.com",
    description: "Cybersecurity portfolio, notes, projects, and homelab experiments by cyberdr1ft3r.",
    siteName: "Cyber Drifter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Drifter — cyberdr1ft3r.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Drifter — cyberdr1ft3r.com",
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts.",
    creator: "@cyberdr1ft3r",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: emojiFavicon,
        type: "image/svg+xml",
      },
    ],
    apple: emojiFavicon,
    shortcut: emojiFavicon,
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
