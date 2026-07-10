import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiExternalLink, FiMail } from 'react-icons/fi'

const components = {
  mail: FiMail,
  github: AiOutlineGithub,
  facebook: AiOutlineFacebook,
  linkedin: FaLinkedinIn,
  twitter: AiOutlineTwitter,
  website: AiOutlineGlobal,
  external: FiExternalLink,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-ink-soft transition-colors hover:text-accent dark:text-ink-soft-dark dark:hover:text-accent-dark"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`h-${size} w-${size}`} />
    </a>
  )
}

export default SocialIcon
