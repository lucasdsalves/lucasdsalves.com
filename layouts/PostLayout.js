import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SocialIcon from '@/components/social-icons'
import AppIcons from '@/components/icons'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  PocketShareButton,
  PocketIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags, readingTime } = frontMatter
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="space-y-1 rounded-lg py-4 px-2 text-center sm:py-6 md:py-10">
            <div className="space-y-1 text-center">
              <div className="flex justify-center text-center">
                <div className="pr-2 text-sm text-slate-400">
                  <AppIcons kind="calendar" size="5" />
                </div>
                <time dateTime={date} className="text-sm">
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </div>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div>
                {authorDetails.map((author) => (
                  <span className="text-gray:200 dark:text-white" key={author.name}>
                    {' '}
                    ✏️ {author.name} &nbsp;
                  </span>
                ))}
                <span className="text-sm"> ⌚ {readingTime.text} </span>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">{children}</div>
              <div className="grid place-items-center pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-4 pb-2 italic">Share this post</div>
                <div className="flex items-center space-x-4">
                  <TwitterShareButton url={postUrl} title={title} via="lucasdsalves">
                    <SocialIcon kind="twitter" href={postUrl} size="6" />
                  </TwitterShareButton>
                  <WhatsappShareButton url={postUrl} title={title}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  <TelegramShareButton url={postUrl} title={title} alt="Telegram">
                    <TelegramIcon size={32} round={true} />
                  </TelegramShareButton>
                  <EmailShareButton
                    body={'Check out this blog post'}
                    subject={title}
                    separator=" : "
                    url={postUrl}
                    title="Email"
                  >
                    <EmailIcon size={32} round={true} />
                  </EmailShareButton>
                  <LinkedinShareButton
                    summary={'Check out this blog post'}
                    title={title}
                    source={siteMetadata.siteUrl}
                    url={postUrl}
                  >
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                  <PocketShareButton url={postUrl} title={title}>
                    <PocketIcon size={32} round={true} />
                  </PocketShareButton>
                </div>
              </div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
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
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
