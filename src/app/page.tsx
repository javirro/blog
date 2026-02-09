import LastUpdatedPosts from '@/ui/LastUpdatedPosts'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl">
          <div className="inline-block p-3 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-xl mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Welcome to Blockchain by devs for devs
          </h1>

          <p className="text-lg sm:text-xl leading-8 text-gray-400 max-w-2xl">
            Explore the latest insights, tutorials, and deep dives into blockchain technology, smart contracts, and decentralized applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link
              href="/posts"
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 px-8 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Read Articles
            </Link>
          </div>
        </div>
        <LastUpdatedPosts />
      </main>
    </div>
  )
}
