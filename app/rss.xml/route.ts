import { blogPosts } from "@/lib/blog-data"

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cyberdr1ft3r.com"
  const items = blogPosts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid>${baseUrl}/blog/${post.slug}</guid>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>CyberDr1ft3r Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Technical notes, experiments, and project writeups from CyberDr1ft3r.</description>
        ${items}
      </channel>
    </rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
