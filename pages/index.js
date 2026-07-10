import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 3
const MAX_PROJECTS = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="pb-24">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Entry 001 &middot; Introduction
        </div>
        <h1 className="text-wrap-balance mb-5 max-w-3xl font-serif text-4xl font-medium leading-[1.05] text-ink dark:text-ink-dark sm:text-5xl md:text-6xl">
          Hi, I&rsquo;m <em className="not-italic text-accent dark:text-accent-dark">Jordan</em> — I
          build models that tell you why, not just what.
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-ink-soft-dark">
          I&rsquo;m a self-taught data scientist based in Kitchener&ndash;Waterloo who spends most
          of my time turning messy transaction and sensor data into predictions people can act on —
          then I write about how I got there.
        </p>

        <div className="mb-16 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-rule py-5 font-mono text-sm dark:border-rule-dark sm:grid-cols-3 md:grid-cols-5">
          <div>
            <div className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft dark:text-ink-soft-dark">
              Role
            </div>
            <div>Data Scientist</div>
          </div>
          <div>
            <div className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft dark:text-ink-soft-dark">
              Based
            </div>
            <div>Kitchener–Waterloo, ON</div>
          </div>
          <div>
            <div className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft dark:text-ink-soft-dark">
              Stack
            </div>
            <div>Python &middot; SQL &middot; PySpark</div>
          </div>
          <div>
            <div className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft dark:text-ink-soft-dark">
              R&eacute;sum&eacute;
            </div>
            <Link href="/resume.pdf" className="text-accent hover:underline dark:text-accent-dark">
              Download &rarr;
            </Link>
          </div>
          <div>
            <div className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft dark:text-ink-soft-dark">
              Contact
            </div>
            <Link href="/contact" className="text-accent hover:underline dark:text-accent-dark">
              Say hello &rarr;
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-ink-soft-dark">
            Selected work{' '}
            <span className="text-highlight dark:text-highlight-dark">
              {String(Math.min(MAX_PROJECTS, projectsData.length)).padStart(2, '0')}
            </span>{' '}
            of {String(projectsData.length).padStart(2, '0')}
            <span className="h-px flex-1 bg-rule dark:bg-rule-dark" />
          </h2>
          <div>
            {projectsData.slice(0, MAX_PROJECTS).map((project) => (
              <div
                key={project.title}
                className="grid grid-cols-1 gap-3 border-b border-rule py-6 first:pt-0 dark:border-rule-dark sm:grid-cols-[96px_1fr]"
              >
                <div className="font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="hover:text-accent dark:hover:text-accent-dark"
                    >
                      Live &rarr;
                    </Link>
                  ) : (
                    <Link
                      href={project.github}
                      className="hover:text-accent dark:hover:text-accent-dark"
                    >
                      Code &rarr;
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-ink dark:text-ink-dark">
                    {project.title}
                  </h3>
                  <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink-soft dark:text-ink-soft-dark">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] text-ink-soft dark:text-ink-soft-dark">
                    {[project.tech1, project.tech2, project.tech3].filter(Boolean).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-rule bg-card px-2 py-0.5 dark:border-rule-dark dark:bg-card-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-5 text-right">
            <Link
              href="/projects"
              className="font-mono text-sm text-accent hover:underline dark:text-accent-dark"
            >
              All projects &rarr;
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-ink-soft-dark">
            Latest writing
            <span className="h-px flex-1 bg-rule dark:bg-rule-dark" />
          </h2>
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="border-b border-rule py-6 dark:border-rule-dark">
                  <div className="mb-2 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-ink dark:text-ink-dark">
                    <Link
                      href={`/blog/${slug}`}
                      className="hover:text-accent dark:hover:text-accent-dark"
                    >
                      {title}
                    </Link>
                  </h3>
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
          {posts.length > MAX_DISPLAY && (
            <div className="pt-5 text-right">
              <Link
                href="/blog"
                className="font-mono text-sm text-accent hover:underline dark:text-accent-dark"
                aria-label="all posts"
              >
                All posts &rarr;
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
          Press{' '}
          <kbd className="rounded border border-rule bg-card px-1.5 py-0.5 dark:border-rule-dark dark:bg-card-dark">
            &#8984;
          </kbd>{' '}
          <kbd className="rounded border border-rule bg-card px-1.5 py-0.5 dark:border-rule-dark dark:bg-card-dark">
            K
          </kbd>{' '}
          to search
        </div>
      </div>
    </>
  )
}
