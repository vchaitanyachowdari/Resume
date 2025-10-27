import { NavLink } from 'react-router-dom'
import Icon from '@components/icons'
import type { SectionNavItem, SectionId } from '@data/navigation'

interface SectionNavProps {
  items: SectionNavItem[]
  activeId?: SectionId
}

/**
 * Renders a navigation list of resume sections with links and icons.
 *
 * Each item links to "/" when `id` is "hero" or to "/{id}" otherwise. A link receives the
 * `section-nav__link--active` modifier when the current route matches the link or when
 * `activeId` equals the item's `id`.
 *
 * @param items - Array of section items to render (each supplies `id`, `label`, and `icon`)
 * @param activeId - Optional section id to mark as active in addition to router active state
 * @returns A navigation element containing a list of section links and icons
 */
export default function SectionNav({ items, activeId }: SectionNavProps) {
  return (
    <nav className="section-nav" aria-label="Resume sections">
      <ul className="section-nav__list">
        {items.map((item) => {
          const to = item.id === 'hero' ? '/' : `/${item.id}`
          const isActive = activeId ? activeId === item.id : false

          return (
            <li key={item.id} className="section-nav__item">
              <NavLink
                to={to}
                className={({ isActive: isRouteActive }) =>
                  [
                    'section-nav__link',
                    isRouteActive || isActive
                      ? 'section-nav__link--active'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                <Icon name={item.icon} className="section-nav__icon" />
                <span className="section-nav__label">{item.label}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}