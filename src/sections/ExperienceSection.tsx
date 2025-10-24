import SectionHeader from '@components/SectionHeader'
import TimelineItem from '@components/TimelineItem'
import type { Experience } from '@data/experience'
import { experiences } from '@data/experience'

interface ExperienceSectionProps {
  className?: string
}

export default function ExperienceSection({
  className,
}: ExperienceSectionProps) {
  const classes = ['resume-section', 'experience-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id="experience"
      className={classes}
      aria-labelledby="experience-heading"
    >
      <SectionHeader
        id="experience-heading"
        icon="suitcase"
        title="Work Experience"
        subtitle="Founder, builder, and collaborator"
      />
      <div className="experience-section__timeline">
        {experiences.map((experience: Experience) => (
          <TimelineItem
            key={experience.id}
            title={experience.title}
            subtitle={`@ ${experience.company}`}
            period={experience.period}
            description={experience.description}
            highlights={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  )
}
