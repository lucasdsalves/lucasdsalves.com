import Calendar from './calendar.svg'
import Clipboard from './clipboard.svg'
import ArrowTopRightSquare from './arrow-top-right-on-square.svg'

// Icons taken from: https://heroicons.com/

const components = {
  calendar: Calendar,
  clipboard: Clipboard,
  arrowTopRightSquare: ArrowTopRightSquare,
}

const AppIcons = ({ kind, size = 8 }) => {
  const SocialSvg = components[kind]

  return (
    <a className="text-sm transition" target="_blank" rel="noopener noreferrer">
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`text-gray-700 dark:text-gray-200 h-${size} w-${size}`} />
    </a>
  )
}

export default AppIcons
