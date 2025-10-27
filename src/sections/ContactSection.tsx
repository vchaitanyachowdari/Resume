import SectionHeader from '@components/SectionHeader'
import StatCard from '@components/StatCard'
import type { ContactMethod } from '@data/contact'
import { contactMethods } from '@data/contact'

interface ContactSectionProps {
  className?: string
}

/**
 * Render the Contact section with a header and a grid of contact method cards.
 *
 * @param className - Optional additional CSS class or classes applied to the section container
 * @returns The section element containing the contact header and a grid of `StatCard` items for each contact method
 */
export default function ContactSection({ className }: ContactSectionProps) {
  const classes = ['resume-section', 'contact-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="contact" className={classes} aria-labelledby="contact-heading">
      <SectionHeader
        id="contact-heading"
        icon="email"
        title="Contact"
        subtitle="Let’s collaborate, partner, or just say hello"
      />
      <div className="contact-section__grid">
        {contactMethods.map((method: ContactMethod) => (
          <StatCard
            key={method.id}
            icon={method.icon}
            label={method.label}
            value={method.value}
            href={method.href}
          />
        ))}
      </div>
    </section>
  )
}