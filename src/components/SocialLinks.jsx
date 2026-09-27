import Icon from './Icon.jsx'

export default function SocialLinks({ links }) {
  return (
    <div className="socials">
      {links.map((link) => (
        <a
          key={link.type}
          className="button"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={link.type} />
          {link.label}
        </a>
      ))}
    </div>
  )
}
