import Link from 'next/link'
import { getLastUpdatedPosts } from '@/lib/posts'
import { formatDate } from '@/lib/formatDate'

export default function LastUpdatedPosts() {
  const posts = getLastUpdatedPosts(3)

  if (posts.length === 0) return null

  return (
    <div className="w-full mt-16 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Last Updated Posts
        </h2>
        <Link href="/posts" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
          View all
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            className="group block p-6 rounded-2xl bg-white/5 border border-indigo-100/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:translate-x-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-xs font-medium text-indigo-400/70 whitespace-nowrap">{formatDate(post.updated)}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
