import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from 'react-share'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { HiOutlinePencil, HiOutlineClock } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const shareIconClass =
  'flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink-soft transition-colors hover:border-accent hover:text-accent dark:border-rule-dark dark:text-ink-soft-dark dark:hover:border-accent-dark dark:hover:text-accent-dark'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, readingTime } = frontMatter
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article className="pb-24">
        <header className="border-b border-rule pb-8 pt-6 dark:border-rule-dark">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
            <BsCalendarDate className="h-3.5 w-3.5" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </div>
          <PageTitle>{title}</PageTitle>
          <div className="mt-4 flex gap-5 font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
            <span className="flex items-center gap-1.5">
              <HiOutlinePencil className="h-4 w-4" />
              {readingTime.words} words
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineClock className="h-4 w-4" />
              {readingTime.text}
            </span>
          </div>
        </header>

        <div className="grid gap-y-10 pt-8 xl:grid-cols-4 xl:gap-x-10">
          <dl className="xl:order-2">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex gap-8 xl:flex-col xl:gap-6">
                {authorDetails.map((author) => (
                  <li className="flex items-center gap-2" key={author.name}>
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width="38px"
                        height="38px"
                        alt="avatar"
                        className="h-9 w-9 rounded-full border border-rule dark:border-rule-dark"
                        placeholder="blur"
                        blurDataURL="/static/images/SVG-placeholder.png"
                      />
                    )}
                    <div className="text-sm font-medium leading-5 text-ink dark:text-ink-dark">
                      {author.name}
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>

          <div className="xl:order-1 xl:col-span-3">
            <div className="prose max-w-none font-serif dark:prose-dark">{children}</div>

            <div className="mt-10 flex items-center gap-3">
              <TwitterShareButton
                url={postUrl}
                title={title}
                via={siteMetadata.socialAccount.twitter}
                className={shareIconClass}
              >
                <FaTwitter className="h-4 w-4" />
              </TwitterShareButton>
              <FacebookShareButton url={postUrl} quote={title} className={shareIconClass}>
                <FaFacebookF className="h-4 w-4" />
              </FacebookShareButton>
              <EmailShareButton
                body="Check out this blog"
                subject={title}
                separator=" : "
                url={postUrl}
                className={shareIconClass}
              >
                <FiMail className="h-4 w-4" />
              </EmailShareButton>
              <LinkedinShareButton
                summary="Check out this blog"
                title={title}
                source={siteMetadata.siteUrl}
                url={postUrl}
                className={shareIconClass}
              >
                <FaLinkedinIn className="h-4 w-4" />
              </LinkedinShareButton>
              <Link href={editUrl(fileName)} className={shareIconClass} aria-label="Edit on GitHub">
                <FaGithub className="h-4 w-4" />
              </Link>
            </div>

            <Comments frontMatter={frontMatter} />

            <footer className="mt-10 border-t border-rule pt-8 dark:border-rule-dark">
              {tags && (
                <div className="mb-8">
                  <h2 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-soft-dark">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="mb-8 flex justify-between gap-6">
                  {prev && (
                    <div>
                      <h2 className="mb-1 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-soft-dark">
                        Previous
                      </h2>
                      <Link
                        href={`/blog/${prev.slug}`}
                        className="text-accent hover:underline dark:text-accent-dark"
                      >
                        {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && (
                    <div className="text-right">
                      <h2 className="mb-1 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-soft-dark">
                        Next
                      </h2>
                      <Link
                        href={`/blog/${next.slug}`}
                        className="text-accent hover:underline dark:text-accent-dark"
                      >
                        {next.title}
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <Link href="/blog" className="text-accent hover:underline dark:text-accent-dark">
                &larr; Back to the blog
              </Link>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
