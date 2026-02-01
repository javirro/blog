import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { SolidityBlock } from '@/ui/posts/SolidityBlock'
import { ConsoleCommandBlock  } from '@/ui/posts/ConsoleCommand'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface Params {
  params: Promise<{
    slug: string
  }>
}
export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 wrap-break-words">{post.title}</h1>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">{post.date}</p>
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:scroll-mt-20 prose-img:rounded-lg prose-pre:max-w-full prose-pre:overflow-x-auto">
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
