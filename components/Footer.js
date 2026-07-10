import Link from './Link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-8 dark:border-rule-dark">
      <div className="flex flex-col items-center gap-1 font-mono text-xs text-ink-soft dark:text-ink-soft-dark sm:flex-row sm:justify-between sm:gap-0">
        <Link href="/" className="link-underline">
          Jordan Samek &copy; {new Date().getFullYear()}
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
          <Link href="/feed.xml" className="link-underline">
            RSS
          </Link>
        </div>
      </div>
    </footer>
  )
}
