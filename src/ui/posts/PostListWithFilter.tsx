'use client'

import { PostCategory } from '@/constants'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'
import { useState } from 'react'

interface PostItem {
  slug: string
  title: string
  date: string
  description: string
  category: PostCategory
}

export default function PostListWithFilter({
  posts,
  categories,
}: {
  posts: PostItem[]
  categories: PostCategory[]
}) {
  const [activeCategory, setActiveCategory] = useState<PostCategory | null>(null)

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeCategory === null
              ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all duration-200 cursor-pointer ${
              activeCategory === category
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            className="block border-b pb-8 border-gray-200 hover:border-indigo-500 transition-all duration-300 group"
            key={post.slug}
          >
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-color-white text-xl sm:text-2xl font-semibold text-indigo-400 group-hover:text-indigo-600 transition-colors tracking-tight">
                {post.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 capitalize">
                {post.category}
              </span>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {formatDate(post.date)}
              </p>
            </div>
            <p className="mt-3 text-gray-200 leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <p className="text-gray-400 text-center py-12">
            No posts found in this category.
          </p>
        )}
      </div>
    </>
  )
}
