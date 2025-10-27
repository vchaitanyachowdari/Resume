import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : {
                  duration: 1,
                  delay: delay,
                  ease: [0.4, 0, 0.2, 1],
                }
          }
        />
      </div>
    </div>
  )
}
