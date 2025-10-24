import BadgeList from '@components/BadgeList'
import SectionHeader from '@components/SectionHeader'
import { hobbies } from '@data/personal'

interface HobbiesSectionProps {
  className?: string
}

export default function HobbiesSection({
  className,
}: HobbiesSectionProps) {
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
