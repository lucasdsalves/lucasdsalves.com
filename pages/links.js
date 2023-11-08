import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function Links() {
  return (
    <>
      <div className="mx-auto mt-16 flex w-full flex-col items-center justify-center px-8">
        <div>
          <Image
            alt="Lucas dos Santos Alves"
            height={130}
            width={130}
            src={siteMetadata.image}
            className="h-48 w-48 rounded-full"
          />
        </div>
        <h1 className="mt-4 mb-8 text-xl font-bold">{siteMetadata.author}</h1>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
        >
          <div className="flex w-full text-center">
            <div className="h-10 w-10">
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="10" />
            </div>
            <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
              LinkedIn
            </h2>
          </div>
        </a>

        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
        >
          <div className="flex w-full text-center">
            <div className="h-10 w-10">
              <SocialIcon kind="github" href={siteMetadata.github} size="10" />
            </div>
            <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
              GitHub
            </h2>
          </div>
        </a>

        <a
          href={siteMetadata.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-slate-100 p-1 transition-all hover:scale-105"
        >
          <div className="flex w-full text-center">
            <div className="h-10 w-10">
              <SocialIcon kind="siteLogo" href={siteMetadata.siteUrl} size="10" />
            </div>
            <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
              Website
            </h2>
          </div>
        </a>

        <a
          href={siteMetadata.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
        >
          <div className="flex w-full text-center">
            <div className="h-10 w-10">
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="10" />
            </div>
            <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
              Twitter
            </h2>
          </div>
        </a>

        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
        >
          <div className="flex w-full text-center">
            <div className="h-10 w-10">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="10" />
            </div>
            <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
              E-mail
            </h2>
          </div>
        </a>
      </div>
    </>
  )
}
