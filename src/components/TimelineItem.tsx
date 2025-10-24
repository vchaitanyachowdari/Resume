interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description?: string
  highlights?: string[]
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  highlights,
}: TimelineItemProps) {
  const hasHighlights = Array.isArray(highlights) && highlights.length > 0

  return (
    <article className="timeline-item">
      <header className="timeline-item__header">
        <h3 className="timeline-item__title">{title}</h3>
        <span className="timeline-item__period">{period}</span>
      </header>
      {subtitle ? (
        <p className="timeline-item__subtitle">{subtitle}</p>
      ) : null}
      {description ? (
        <p className="timeline-item__description">{description}</p>
      ) : null}
      {hasHighlights ? (
        <ul className="timeline-item__highlights">
          {highlights!.map((item) => (
            <li key={item} className="timeline-item__highlight">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
