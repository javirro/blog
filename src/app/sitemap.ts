import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const urls = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    ...urls
  ]
}
