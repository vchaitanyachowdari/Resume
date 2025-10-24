import BadgeList from '@components/BadgeList'
import Icon from '@components/icons'
import SectionHeader from '@components/SectionHeader'
import { languages } from '@data/personal'
import { skillCategories } from '@data/skills'

interface SkillsSectionProps {
  className?: string
}

export default function SkillsSection({ className }: SkillsSectionProps) {
  const classes = ['resume-section', 'skills-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="skills" className={classes} aria-labelledby="skills-heading">
      <SectionHeader
        id="skills-heading"
        icon="tools"
        title="Skills & Tools"
        subtitle="Technical stacks, platforms, and soft skills"
      />
      <div className="skills-section__grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skills-section__category">
            <h3 className="skills-section__category-title">{category.title}</h3>
            <BadgeList items={category.skills} />
          </div>
        ))}
      </div>
      <div
        className="skills-section__languages"
        aria-labelledby="skills-languages-heading"
      >
        <div className="skills-section__languages-header">
          <Icon name="language" className="skills-section__languages-icon" />
          <h3 id="skills-languages-heading" className="skills-section__languages-title">
            Languages
          </h3>
        </div>
        <ul className="skills-section__languages-list">
          {languages.map((language) => (
            <li key={language.id} className="skills-section__languages-item">
              <span className="skills-section__language-name">
                {language.name}
              </span>
              <span className="skills-section__language-level">
                {language.proficiency}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
