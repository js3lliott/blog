import SocialIcon from './social-icons'

const Card = ({ title, description, href, github, tech1, tech2, tech3 }) => (
  <div className="grid grid-cols-1 gap-3 border-b border-rule py-8 first:pt-0 last:border-b-0 dark:border-rule-dark sm:grid-cols-[96px_1fr]">
    <div className="flex gap-2 sm:flex-col sm:gap-3">
      {href ? <SocialIcon kind="external" href={href} size="5" /> : null}
      {github ? <SocialIcon kind="github" href={github} size="5" /> : null}
    </div>
    <div>
      <h2 className="mb-2 text-xl font-semibold text-ink dark:text-ink-dark">{title}</h2>
      <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink-soft dark:text-ink-soft-dark">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 font-mono text-[11px] text-ink-soft dark:text-ink-soft-dark">
        {[tech1, tech2, tech3].filter(Boolean).map((tech) => (
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
)

export default Card
