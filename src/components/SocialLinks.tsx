import { motion } from 'framer-motion'
import Icon, { type IconName } from '@components/icons'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { hoverScale, tapScale } from '@utils/animations'

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
  const prefersReducedMotion = useReducedMotion()

  if (!links.length) {
    return null
  }

  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.id} className="social-links__item">
          <motion.a
            className="social-links__link"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            whileHover={prefersReducedMotion ? undefined : hoverScale}
            whileTap={prefersReducedMotion ? undefined : tapScale}
          >
            <Icon name={link.icon} />
          </motion.a>
        </li>
      ))}
    </ul>
  )
}
