import SectionHeader from '@components/SectionHeader'
import type { Education } from '@data/education'
import { education } from '@data/education'

interface EducationSectionProps {
  className?: string
}

/**
 * Render the "Education" resume section containing a header and a list of education entries.
 *
 * @param className - Optional additional CSS class(es) appended to the section's root element
 * @returns The section element with id "education" that contains a SectionHeader and a list of education items
 */
export default function EducationSection({ className }: EducationSectionProps) {
  const classes = ['resume-section', 'education-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id="education"
      className={classes}
      aria-labelledby="education-heading"
    >
      <SectionHeader
        id="education-heading"
        icon="graduate"
        title="Education"
        subtitle="Formal programs and continuous learning"
      />
      <ul className="education-section__list">
        {education.map((item: Education) => (
          <li key={item.id} className="education-section__item">
            <h3 className="education-section__institution">
              {item.institution}
            </h3>
            <p className="education-section__program">{item.program}</p>
            <span className="education-section__period">{item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}