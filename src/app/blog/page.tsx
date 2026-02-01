import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12 tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Blockchain posts
      </h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className=" block border-b pb-8 border-gray-200 hover:border-indigo-500 transition-all duration-300 group"
            key={post.slug}
          >
            <h2 className="text-color-white text-xl sm:text-2xl font-semibold text-indigo-400 group-hover:text-indigo-600 transition-colors tracking-tight">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {post.date}
            </p>
            <p className="mt-3 text-gray-200 leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
