import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="flex cursor-default flex-col space-y-2">
          <h1 className="mt-20 text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
            Lucas dos Santos Alves
          </h1>
          <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
            Software developer
          </h2>
          <Link
            href="/about"
            className="text-md w-max cursor-pointer pt-5 sm:text-lg md:text-xl xl:text-2xl"
          >
            {' '}
            Read more about me &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
