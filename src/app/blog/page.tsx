import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className="block border-b pb-8 border-gray-200 hover:border-blue-500 transition-colors"
            key={post.slug}
          >
            <h2 className="text-xl sm:text-2xl font-semibold hover:text-blue-600 transition-colors tracking-tight">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            <p className="mt-3 text-gray-700 leading-relaxed">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
