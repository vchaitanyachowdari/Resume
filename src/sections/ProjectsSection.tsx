import { motion } from 'framer-motion'
import AnimatedSection from '@components/AnimatedSection'
import SectionHeader from '@components/SectionHeader'
import type { OtherProject, Project } from '@data/projects'
import { otherProjects, projects } from '@data/projects'
import { useReducedMotion } from '@hooks/useReducedMotion'
import {
  getReducedMotionVariants,
  hoverScale,
  staggerContainer,
  staggerItem,
} from '@utils/animations'

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const classes = ['resume-section', 'projects-section', className]
    .filter(Boolean)
    .join(' ')

  const containerVariants = prefersReducedMotion
    ? getReducedMotionVariants(staggerContainer)
    : staggerContainer
  const itemVariants = prefersReducedMotion
    ? getReducedMotionVariants(staggerItem)
    : staggerItem

  return (
    <AnimatedSection
      id="projects"
      className={classes}
      ariaLabelledby="projects-heading"
    >
      <SectionHeader
        id="projects-heading"
        icon="code"
        title="Personal Projects"
        subtitle="Ideas, experiments, and live products"
      />
      <motion.div
        className="projects-section__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {projects.map((project: Project) => (
          <motion.article
            key={project.id}
            className="projects-section__card"
            variants={itemVariants}
            whileHover={prefersReducedMotion ? undefined : hoverScale}
          >
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
          </motion.article>
        ))}
      </motion.div>
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
    </AnimatedSection>
  )
}
