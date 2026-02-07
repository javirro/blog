import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const urls = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.updated || post.date
  }))

  return [{ url: BASE_URL, lastModified: new Date() }, { url: `${BASE_URL}/posts`, lastModified: new Date() }, ...urls]
}
