import { Dialog, Combobox, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { FiCommand } from 'react-icons/fi'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

export default function CommandPalette({ navigation }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [ThemeSound] = useSound('/static/sounds/open.mp3')

  const filterednavigation = query
    ? navigation.pages.filter((page) => page.name.toLowerCase().includes(query.toLocaleLowerCase()))
    : navigation.pages
  return (
    <>
      <motion.button
        className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-rule bg-card text-ink-soft transition-all duration-200 ease-in-out hover:border-accent dark:border-rule-dark dark:bg-card-dark dark:text-ink-soft-dark dark:hover:border-accent-dark"
        type="button"
        aria-label="Command palette"
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeIn' }}
        onClick={() => {
          toggleIcon()
          ThemeSound()
        }}
      >
        <FiCommand />
      </motion.button>
      <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-20 overflow-y-auto p-12 pt-[20vh]">
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-ink/60 dark:bg-black/70" />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              value=""
              onChange={(page) => {
                setIsOpen(false)
                router.push(`${page.href}`)
              }}
              as="div"
              className="relative mx-auto max-h-[50vh] max-w-xl divide-y divide-rule overflow-hidden overflow-y-scroll rounded-lg border border-rule bg-card shadow-2xl dark:divide-rule-dark dark:border-rule-dark dark:bg-card-dark"
            >
              <div className="flex items-center px-4 text-ink-soft dark:text-ink-soft-dark">
                <HiSearch className="h-5 w-5" />
                <Combobox.Input
                  onChange={(event) => {
                    setQuery(event.target.value)
                  }}
                  className="h-12 w-full border-0 bg-transparent font-mono text-sm text-ink placeholder-ink-soft focus:ring-0 dark:text-ink-dark dark:placeholder-ink-soft-dark"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
              {filterednavigation.length > 0 && (
                <Combobox.Options static className="max-h-30 overflow-y-auto py-4 text-sm">
                  {filterednavigation.map((page) => (
                    <Combobox.Option key={page.name} value={page}>
                      {({ active }) => (
                        <div
                          className={`cursor-pointer space-x-1 px-14 py-2 ${
                            active ? 'bg-accent-soft dark:bg-accent-soft-dark' : ''
                          }`}
                        >
                          <span className="font-medium text-ink dark:text-ink-dark">
                            {page.name}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
              {query && filterednavigation.length === 0 && (
                <p className="py-4 px-12 text-sm text-ink-soft dark:text-ink-soft-dark">
                  no results found
                </p>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  )
}
