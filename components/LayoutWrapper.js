import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette'
import ThemeSwitch from './ThemeSwitch'
import DropMenu from './DropMenu.js'
import MobileNav from './MobileNav'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-paper-dark dark:text-ink-dark">
      <SectionContainer>
        <div className="flex min-h-screen flex-col">
          <header className="flex items-baseline justify-between border-b border-rule py-8 dark:border-rule-dark">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-ink-soft-dark">
                J. Samek <span className="text-highlight dark:text-highlight-dark">&middot;</span>{' '}
                Field Notes
              </span>
            </Link>
            <div className="flex items-center gap-1">
              <nav className="mr-2 hidden items-center gap-6 sm:flex">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-accent dark:text-ink-soft-dark dark:hover:text-accent-dark"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              <CommandPalette navigation={navigation} />
              <ThemeSwitch />
              <span className="hidden sm:inline-block">
                <DropMenu />
              </span>
              <MobileNav />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
