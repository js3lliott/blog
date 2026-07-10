const ContactLink = ({ title, href, icon }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-baseline gap-2 font-mono text-2xl text-ink transition-colors hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark sm:text-3xl"
      >
        <span>{icon}</span>
        <span className="text-ink-soft dark:text-ink-soft-dark">@</span>
        <span className="text-ink-soft group-hover:text-accent dark:text-ink-soft-dark dark:group-hover:text-accent-dark">
          {title}
        </span>
      </a>
    </li>
  )
}

export default ContactLink
