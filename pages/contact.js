import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="pb-24">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-highlight dark:text-highlight-dark">
          <span className="inline-block h-px w-4 bg-highlight dark:bg-highlight-dark" />
          Say hello
        </div>
        <h1 className="mb-10 font-serif text-4xl font-medium text-ink dark:text-ink-dark sm:text-5xl">
          Contact
        </h1>
        <ul className="flex flex-col gap-5 border-t border-rule pt-8 dark:border-rule-dark">
          <ContactLink href="mailto:jordan.samek@gmail.com" title="gmail" icon="jordan.samek" />
          <ContactLink href="https://github.com/js3lliott" title="github" icon="js3lliott" />
          <ContactLink href="https://twitter.com/samekjordan" title="twitter" icon="samekjordan" />
          <ContactLink
            href="https://www.linkedin.com/in/jordan-samek/"
            title="linkedin"
            icon="jordan-samek"
          />
        </ul>
      </div>
    </>
  )
}

export default Contact
