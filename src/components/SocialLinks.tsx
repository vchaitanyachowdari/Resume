import Icon, { type IconName } from '@components/icons'

interface SocialLink {
  id: string
  icon: IconName
  label: string
  href: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  if (!links.length) {
    return null
  }

  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.id} className="social-links__item">
          <a
            className="social-links__link"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
          >
            <Icon name={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
