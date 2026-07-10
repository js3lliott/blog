import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="pb-24">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Index
        </div>
        <h1 className="mb-8 font-serif text-4xl font-medium text-ink dark:text-ink-dark sm:text-5xl">
          Tags
        </h1>
        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="flex items-center gap-1">
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="font-mono text-xs text-ink-soft dark:text-ink-soft-dark"
                >
                  ({tags[t]})
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
