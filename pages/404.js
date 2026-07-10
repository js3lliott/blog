import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-center py-24 text-center">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Entry not found
        </div>
        <h1 className="mb-6 font-serif text-7xl font-medium text-ink dark:text-ink-dark sm:text-8xl">
          404
        </h1>
        <p className="mb-10 max-w-md text-ink-soft dark:text-ink-soft-dark">
          Nothing&rsquo;s logged at this page. It may have moved, or the URL might have a typo
          &mdash; double check it and try again.
        </p>
        <Link
          href="/"
          className="rounded-md bg-accent px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent-dark dark:bg-accent-dark dark:text-ink dark:hover:bg-accent"
        >
          &larr; Return to homepage
        </Link>
      </div>
    </>
  )
}
