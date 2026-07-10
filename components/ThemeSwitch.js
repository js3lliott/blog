import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import useSound from 'use-sound'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const [ThemeSound] = useSound('/static/sounds/switch-on.mp3')

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="ml-1 cursor-pointer rounded-full border border-rule bg-card transition-all hover:border-accent dark:border-rule-dark dark:bg-card-dark dark:hover:border-accent-dark">
      <motion.button
        className="flex h-8 w-8 items-center justify-center p-2 text-ink-soft dark:text-ink-soft-dark"
        whileTap={{
          scale: 0.7,
          rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          toggleTheme()
          ThemeSound()
        }}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <HiSun className="h-4 w-4" />
        ) : (
          <HiMoon className="h-4 w-4" />
        )}
      </motion.button>
    </div>
  )
}

export default ThemeSwitch
