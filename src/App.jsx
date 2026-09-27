import { profile } from './data/profile.js'
import Section from './components/Section.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'
import Properties from './components/Properties.jsx'
import Heading from './components/Heading.jsx'
import Text from './components/Text.jsx'
import Divider from './components/Divider.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import Gallery from './components/Gallery.jsx'
import CallToAction from './components/CallToAction.jsx'
import Experience from './components/Experience.jsx'

const linksByType = Object.fromEntries(
  [...profile.contacts, ...profile.socials].map((link) => [link.type, link]),
)

export default function App() {
  return (
    <div className="layout">
      <aside className="layout-left">
        <Section gap={24}>
          <ProfileHeader
            avatar={profile.avatar}
            name={profile.name}
            headline={profile.headline}
            intro={profile.intro}
          />
          <Properties items={profile.contacts} />
        </Section>

        <Divider />

        <Section gap={8}>
          <Text muted>Find me on more social:</Text>
          <SocialLinks links={profile.socials} />
        </Section>
      </aside>

      <main className="layout-right">
        <Section gap={12}>
          <Heading>{profile.services.title}</Heading>
          <Gallery items={profile.services.items} />
        </Section>

        <Section gap={12}>
          <Heading>{profile.experience.title}</Heading>
          <Experience items={profile.experience.items} />
        </Section>

        <Section gap={12}>
          <Heading>{profile.cta.title}</Heading>
          <CallToAction
            text={profile.cta.text}
            buttonLabel={profile.cta.buttonLabel}
            links={profile.cta.links.map((type) => linksByType[type])}
          />
        </Section>
      </main>
    </div>
  )
}
