import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2, text3 }) => {
  return (
    <div className="border-b border-rule py-6 last:border-b-0 dark:border-rule-dark">
      <div className="flex flex-wrap items-baseline gap-x-2 text-lg">
        <span className="font-semibold text-ink dark:text-ink-dark">{title}</span>
        <span className="text-ink-soft dark:text-ink-soft-dark">at</span>
        <Link href={url} className="company font-semibold">
          {company}
        </Link>
      </div>
      <div className="mb-3 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
        {location} &middot; {range}
      </div>
      <ul className="space-y-1.5">
        {[text1, text2, text3].filter(Boolean).map((text, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-ink-soft dark:text-ink-soft-dark"
          >
            <span className="text-highlight dark:text-highlight-dark">&#8227;</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
