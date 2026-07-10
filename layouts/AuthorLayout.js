import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, text1 } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description="A little trivia about me" />
      <div className="pb-24">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Entry 002 &middot; About
        </div>
        <h1 className="mb-10 font-serif text-4xl font-medium text-ink dark:text-ink-dark sm:text-5xl">
          About
        </h1>
        <div className="items-start gap-x-12 space-y-8 md:grid md:grid-cols-3 md:space-y-0">
          <div className="flex flex-col items-start md:sticky md:top-8">
            <Image
              src={avatar}
              alt="avatar"
              width="144px"
              height="144px"
              className="mb-4 h-36 w-36 rounded-full border border-rule dark:border-rule-dark"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="text-xl font-semibold text-ink dark:text-ink-dark">{name}</h3>
            <div className="font-mono text-sm text-ink-soft dark:text-ink-soft-dark">
              {occupation}
            </div>
            <div className="font-mono text-sm text-ink-soft dark:text-ink-soft-dark">{company}</div>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-soft dark:text-ink-soft-dark md:col-span-2">
            <p>
              {text1} Currently, I&rsquo;m focused on building data pipelines and automating them.
            </p>
            <p>
              This is what I&rsquo;m doing right{' '}
              <Link href="/now" className="text-accent hover:underline dark:text-accent-dark">
                now
              </Link>
              .
            </p>
            <p>
              I&rsquo;m always looking to learn new things — currently working on a few projects
              related to MLOps and machine learning. At the same time I&rsquo;m{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#A8763E"
                animationDelay={400}
                animationDuration={900}
                multiline={true}
              >
                actively on the lookout for remote internships in the field of data science.
              </RoughNotation>
            </p>
            <p>
              I&rsquo;m a strong advocate for open source and always interested in working on new
              projects with new people. Feel free to reach out — you can find me through{' '}
              <Link
                href="mailto:jordan.samek@gmail.com"
                className="text-accent hover:underline dark:text-accent-dark"
              >
                email
              </Link>
              .
            </p>

            <h2 className="pt-6 font-serif text-2xl font-medium text-ink dark:text-ink-dark">
              About this site
            </h2>
            <p>
              Welcome to my home on the internet. This site functions as a blog and portfolio, a
              place to share code and thoughts. Opinions are my own.
            </p>
            <p>
              I learnt how to build this site from the most awesome people in the community — this
              build started from{' '}
              <Link
                href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                className="text-accent hover:underline dark:text-accent-dark"
              >
                Timothy Lin&rsquo;s Next.js and Tailwind CSS template
              </Link>
              , and drew on{' '}
              <Link
                href="https://www.einargudni.com/"
                className="text-accent hover:underline dark:text-accent-dark"
              >
                Einar Guðjónsson&rsquo;s
              </Link>{' '}
              now-page and navigation ideas.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
            <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
            Entry 003 &middot; Experience
          </div>
          <h2 className="mb-8 font-serif text-3xl font-medium text-ink dark:text-ink-dark">
            Experience
          </h2>
          <div className="border-t border-rule dark:border-rule-dark">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
