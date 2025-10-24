import SocialLinks from '@components/SocialLinks'
import Icon from '@components/icons'
import { profile } from '@data/profile'

interface HeroSectionProps {
  className?: string
}

export default function HeroSection({ className }: HeroSectionProps) {
  const classes = ['resume-section', 'hero-section', className]
    .filter(Boolean)
    .join(' ')

  const socialLinks = [
    {
      id: 'github',
      icon: 'github' as const,
      label: 'GitHub',
      href: profile.social.github,
    },
    {
      id: 'twitter',
      icon: 'twitter' as const,
      label: 'Twitter',
      href: profile.social.twitter,
    },
    {
      id: 'linkedin',
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      href: profile.social.linkedin,
    },
    {
      id: 'email',
      icon: 'email' as const,
      label: 'Email',
      href: `mailto:${profile.email}`,
    },
    {
      id: 'portfolio',
      icon: 'globe' as const,
      label: 'Portfolio',
      href: profile.social.portfolio,
    },
  ]

  const isCtaExternal = !profile.cta.href.startsWith('#')

  return (
    <section id="hero" className={classes} aria-labelledby="hero-heading">
      <div className="hero-section__media" role="presentation">
        <img
          src={profile.image}
          alt={profile.imageAlt}
          className="hero-section__avatar"
        />
      </div>
      <div className="hero-section__content">
        <span className="hero-section__eyebrow">AI Generalist & Builder</span>
        <h1 id="hero-heading" className="hero-section__title">
          {profile.name}
        </h1>
        <p className="hero-section__subtitle">{profile.title}</p>
        <p className="hero-section__description">{profile.description}</p>
        <div className="hero-section__actions">
          <a
            className="hero-section__cta"
            href={profile.cta.href}
            target={isCtaExternal ? '_blank' : undefined}
            rel={isCtaExternal ? 'noreferrer noopener' : undefined}
          >
            <Icon name={profile.cta.icon} className="hero-section__cta-icon" />
            <span>{profile.cta.label}</span>
          </a>
          <a
            className="hero-section__cta hero-section__cta--secondary"
            href={`mailto:${profile.email}`}
          >
            <Icon name="email" className="hero-section__cta-icon" />
            <span>Let’s Connect</span>
          </a>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </section>
  )
}
