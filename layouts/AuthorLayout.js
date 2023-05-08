import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About | ${name}`} description={`About me - ${name}`} />
      <div className="pt-8">
        <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Lucas dos Santos Alves</h1>
            <h2 className="text-sm font-normal md:text-base">
              {occupation} <span className="font-semibold">{company}</span>
            </h2>
          </div>
          <div>
            <Image
              alt="Lucas dos Santos Alves"
              height={130}
              width={130}
              src={avatar || ''}
              className="h-48 w-48 rounded-full"
            />
          </div>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
