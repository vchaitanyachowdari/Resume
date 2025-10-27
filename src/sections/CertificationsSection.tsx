import SectionHeader from '@components/SectionHeader'
import type { Certification } from '@data/certifications'
import { certifications } from '@data/certifications'

interface CertificationsSectionProps {
  className?: string
}

/**
 * Render the Certifications section containing credential items.
 *
 * Each item displays the certification title, issuer, issuance date, description,
 * and an optional "View Credential" link when a URL is available. The list is
 * generated from the imported certifications data.
 *
 * @param className - Optional additional CSS class to append to the section element
 * @returns The section element containing the rendered certifications list as JSX
 */
export default function CertificationsSection({
  className,
}: CertificationsSectionProps) {
  const classes = ['resume-section', 'certifications-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id="certifications"
      className={classes}
      aria-labelledby="certifications-heading"
    >
      <SectionHeader
        id="certifications-heading"
        icon="award"
        title="Certifications"
        subtitle="Recognitions and credentials"
      />
      <ul className="certifications-section__list">
        {certifications.map((certification: Certification) => (
          <li key={certification.id} className="certifications-section__item">
            <div className="certifications-section__item-header">
              <h3 className="certifications-section__title">
                {certification.title}
              </h3>
              <span className="certifications-section__issued">
                {certification.issued}
              </span>
            </div>
            <p className="certifications-section__issuer">
              {certification.issuer}
            </p>
            <p className="certifications-section__description">
              {certification.description}
            </p>
            {certification.url ? (
              <a
                href={certification.url}
                className="certifications-section__link"
                target="_blank"
                rel="noreferrer noopener"
              >
                View Credential
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}