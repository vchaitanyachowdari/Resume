import Icon from '@components/icons'
import SectionHeader from '@components/SectionHeader'
import { aboutParagraphs } from '@data/about'
import { partners } from '@data/partners'

interface AboutSectionProps {
  className?: string
}

export default function AboutSection({ className }: AboutSectionProps) {
  const classes = ['resume-section', 'about-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="about" className={classes} aria-labelledby="about-heading">
      <SectionHeader id="about-heading" icon="info" title="About Me" />
      <div className="about-section__content">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="about-section__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="about-section__partners" aria-labelledby="about-partners">
        <div className="about-section__partners-heading">
          <Icon name="handshake" className="about-section__partners-icon" />
          <h3 id="about-partners" className="about-section__partners-title">
            Worked With
          </h3>
        </div>
        <ul className="about-section__partners-list">
          {partners.map((partner) => (
            <li key={partner.id} className="about-section__partner">
              <figure className="about-section__partner-card">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="about-section__partner-logo"
                />
                <figcaption className="about-section__partner-caption">
                  <span className="about-section__partner-name">
                    {partner.name}
                  </span>
                  <span className="about-section__partner-description">
                    {partner.description}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
