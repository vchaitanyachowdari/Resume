import SectionHeader from '@components/SectionHeader'
import type { OtherProject, Project } from '@data/projects'
import { otherProjects, projects } from '@data/projects'

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  const classes = ['resume-section', 'projects-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id="projects"
      className={classes}
      aria-labelledby="projects-heading"
    >
      <SectionHeader
        id="projects-heading"
        icon="code"
        title="Personal Projects"
        subtitle="Ideas, experiments, and live products"
      />
      <div className="projects-section__grid">
        {projects.map((project: Project) => (
          <article key={project.id} className="projects-section__card">
            <h3 className="projects-section__card-title">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="projects-section__card-link"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="projects-section__card-description">
              {project.description}
            </p>
          </article>
        ))}
      </div>
      <div
        className="projects-section__other"
        aria-labelledby="projects-other-heading"
      >
        <h4
          id="projects-other-heading"
          className="projects-section__other-title"
        >
          Other Notable Projects
        </h4>
        <ul className="projects-section__other-list">
          {otherProjects.map((project: OtherProject) => {
            const href = project.url ?? '#'
            const isPlaceholder = !project.url || project.url === '#'

            return (
              <li key={project.id} className="projects-section__other-item">
                <a
                  href={href}
                  target={isPlaceholder ? undefined : '_blank'}
                  rel={isPlaceholder ? undefined : 'noreferrer noopener'}
                  className="projects-section__other-link"
                >
                  {project.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
