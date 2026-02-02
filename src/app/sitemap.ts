import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tudominio.com'

  const posts = getAllPosts()

  const urls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated || post.date
  }))

  return [{ url: baseUrl, lastModified: new Date() }, { url: `${baseUrl}/blog`, lastModified: new Date() }, ...urls]
}
