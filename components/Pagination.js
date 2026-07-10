import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  const btnClass =
    'font-mono text-sm text-ink-soft transition-colors hover:text-accent dark:text-ink-soft-dark dark:hover:text-accent-dark disabled:cursor-auto disabled:opacity-40 disabled:hover:text-ink-soft dark:disabled:hover:text-ink-soft-dark'

  return (
    <nav className="mt-4 flex items-center justify-between border-t border-rule pt-6 dark:border-rule-dark">
      {prevPage ? (
        <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
          <button rel="previous" className={btnClass}>
            &larr; Previous
          </button>
        </Link>
      ) : (
        <button rel="previous" className={btnClass} disabled>
          &larr; Previous
        </button>
      )}
      <span className="font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
        {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link href={`/blog/page/${currentPage + 1}`}>
          <button rel="next" className={btnClass}>
            Next &rarr;
          </button>
        </Link>
      ) : (
        <button rel="next" className={btnClass} disabled>
          Next &rarr;
        </button>
      )}
    </nav>
  )
}
