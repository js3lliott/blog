import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="pb-24">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Log
        </div>
        <h1 className="mb-4 font-serif text-4xl font-medium text-ink dark:text-ink-dark sm:text-5xl">
          Projects
        </h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-ink-soft-dark">
          Data science and engineering work I&rsquo;ve built or shipped — mostly prediction models
          and the pipelines that feed them.
        </p>
        <div className="border-t border-rule dark:border-rule-dark">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}
              github={d.github}
              tech1={d.tech1}
              tech2={d.tech2}
              tech3={d.tech3}
            />
          ))}
        </div>
      </div>
    </>
  )
}
