import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 mr-2 rounded border border-rule bg-card px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft transition-colors hover:border-accent hover:text-accent dark:border-rule-dark dark:bg-card-dark dark:text-ink-soft-dark dark:hover:border-accent-dark dark:hover:text-accent-dark">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
