import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blog.techsmachine.com'

  const posts = getAllPosts()

  const urls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.updated || post.date
  }))

  return [{ url: baseUrl, lastModified: new Date() }, { url: `${baseUrl}/posts`, lastModified: new Date() }, ...urls]
}
