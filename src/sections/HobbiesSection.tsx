import BadgeList from '@components/BadgeList'
import SectionHeader from '@components/SectionHeader'
import { hobbies } from '@data/personal'

interface HobbiesSectionProps {
  className?: string
}

/**
 * Render the Hobbies section of the resume.
 *
 * @param className - Additional CSS class name(s) to append to the section container
 * @returns The section element with id "hobbies" containing a header and a badge list of hobbies
 */
export default function HobbiesSection({ className }: HobbiesSectionProps) {
  const classes = ['resume-section', 'hobbies-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="hobbies" className={classes} aria-labelledby="hobbies-heading">
      <SectionHeader id="hobbies-heading" icon="puzzle" title="Hobbies" />
      <BadgeList items={hobbies} />
    </section>
  )
}