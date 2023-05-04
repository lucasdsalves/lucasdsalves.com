import { PageSEO } from '@/components/SEO'

export default function UsesLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`Uses | ${name}`} description={`Uses | ${name}`} />
      <div className="pt-8">
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
