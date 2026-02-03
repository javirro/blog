import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { SolidityBlock } from '@/ui/posts/SolidityBlock'
import { ConsoleCommandBlock } from '@/ui/posts/ConsoleCommand'

interface Params {
  params: Promise<{
    slug: string
  }>
}
// Applying Static site generation (SSG) for blog postst because their content doesn't change often
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}
export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return {
    title: post?.title,
    description: post?.description,
    canonical: `https://yourdomain.com/posts/${slug}`
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Structured Data (JSON-LD) for SEO. It must be rendered inside the article page in Server side components.
  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      '@type': 'Person',
      name: post.author
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tudominio.com/blog/${slug}`
    }
  }

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm sm:text-base text-indigo-400 hover:text-indigo-300 transition-colors mb-6 sm:mb-8 group"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Blog
      </Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 wrap-break-words bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        {post.title}
      </h1>
      <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        <time>{post.date}</time>
      </div>
      <div className="prose prose-sm sm:prose-base lg:prose-xl max-w-none prose-headings:scroll-mt-20 prose-img:rounded-lg prose-pre:max-w-full prose-pre:overflow-x-auto">
        <MDXRemote
          source={post.content}
          components={{
            SolidityBlock,
            ConsoleCommandBlock
          }}
        />
      </div>
    </article>
  )
}
