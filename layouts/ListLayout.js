import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <div className="pb-24">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
        <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
        Log
      </div>
      <h1 className="mb-8 font-serif text-4xl font-medium text-ink dark:text-ink-dark sm:text-5xl">
        {title}
      </h1>
      <div className="relative mb-10 max-w-lg">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full rounded-md border border-rule bg-card px-4 py-2 font-mono text-sm text-ink placeholder-ink-soft focus:border-accent focus:ring-accent dark:border-rule-dark dark:bg-card-dark dark:text-ink-dark dark:placeholder-ink-soft-dark"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-ink-soft dark:text-ink-soft-dark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <ul className="border-t border-rule dark:border-rule-dark">
        {!filteredBlogPosts.length && (
          <li className="py-6 text-ink-soft dark:text-ink-soft-dark">No posts found.</li>
        )}
        {displayPosts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="border-b border-rule py-6 dark:border-rule-dark">
              <div className="mb-2 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
                <time dateTime={date}>{formatDate(date)}</time>
              </div>
              <h2 className="mb-2 text-2xl font-semibold text-ink dark:text-ink-dark">
                <Link
                  href={`/blog/${slug}`}
                  className="hover:text-accent dark:hover:text-accent-dark"
                >
                  {title}
                </Link>
              </h2>
              <div className="mb-3 flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-ink-soft dark:text-ink-soft-dark">
                {summary}
              </p>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
