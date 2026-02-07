'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BASE_URL } from '@/constants'

/**
 * @notice This component generates a breadcrumb navigation based on the current URL path. It splits the path into segments and creates links for each segment,
 * allowing users to easily navigate back to previous sections of the site.
 * Additionally, it includes JSON-LD structured data for SEO purposes, which helps search engines understand the site's structure and improve indexing.
 */
export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') return null

  const segments = pathname.split('/').filter((item) => item !== '')

  // Create breadcrumb items including Home
  const breadcrumbItems = [
    { href: '/', label: 'Home', isCurrent: false },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`
      // Format label: capitalize and replace hyphens
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      const isCurrent = index === segments.length - 1
      return { href, label, isCurrent }
    })
  ]

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`
    }))
  }

  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-300 dark:text-gray-600" aria-hidden="true">
                /
              </span>
            )}
            {item.isCurrent ? (
              <span className="text-gray-900 dark:text-gray-100 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
