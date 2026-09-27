import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBuildingSkyscraper,
  IconCode,
  IconDeviceMobile,
  IconLink,
  IconMail,
  IconPhone,
  IconPuzzle,
  IconSparkles,
} from '@tabler/icons-react'

// Maps the names used in data/profile.js to Tabler icons (https://tabler.io/icons).
const icons = {
  phone: IconPhone,
  email: IconMail,
  facebook: IconBrandFacebook,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  web: IconCode,
  device: IconDeviceMobile,
  ai: IconSparkles,
  custom: IconPuzzle,
  marine: IconAnchor,
  construction: IconBuildingSkyscraper,
}

export default function Icon({ name, size = 18, stroke = 1.6 }) {
  const Component = icons[name] ?? IconLink
  return <Component className="icon" size={size} stroke={stroke} aria-hidden="true" />
}
