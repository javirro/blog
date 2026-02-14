import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostListWithFilter from '@/ui/posts/PostListWithFilter'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  const serializedPosts = posts.map(({ slug, title, date, description, category }) => ({
    slug,
    title,
    date,
    description,
    category,
  }))

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12 tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Blockchain posts
      </h1>
      <PostListWithFilter posts={serializedPosts} categories={categories} />
    </div>
  )
}
