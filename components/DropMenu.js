import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import Link from './Link'
import {
  HomeIcon,
  Pencil1Icon,
  HamburgerMenuIcon,
  FrameIcon,
  ArchiveIcon,
  Link2Icon,
  DiscIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import useSound from 'use-sound'

const menuItemClass = (active) =>
  classNames(
    active
      ? 'bg-accent-soft text-ink dark:bg-accent-soft-dark dark:text-ink-dark'
      : 'text-ink-soft dark:text-ink-soft-dark',
    'block px-4 py-2 text-sm'
  )

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <Menu.Button
          as={motion.button}
          className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-rule bg-card p-2 text-ink-soft transition-all hover:border-accent dark:border-rule-dark dark:bg-card-dark dark:text-ink-soft-dark dark:hover:border-accent-dark"
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
          aria-label="Toggle List Menu"
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
          ThemeSound()
        }}
        afterLeave={() => {
          toggleIcon()
          ThemeSound()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-rule rounded-md border border-rule bg-card shadow-lg focus:outline-none dark:divide-rule-dark dark:border-rule-dark dark:bg-card-dark">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <HomeIcon className="mr-4 mt-0.5" /> Home
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/blog" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <Pencil1Icon className="mr-4 mt-0.5" /> Blog
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/projects" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <ArchiveIcon className="mr-4 mt-0.5" /> Projects
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/about" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <PersonIcon className="mr-4 mt-0.5" /> About
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <Link2Icon className="mr-4 mt-0.5" /> Contact
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/tags" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <FrameIcon className="mr-4 mt-0.5" /> Tags
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/now" className={menuItemClass(active)}>
                  <div className="flex flex-row">
                    <DiscIcon className="mr-4 mt-0.5" /> Now
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
