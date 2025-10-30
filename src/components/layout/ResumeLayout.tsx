import type { ReactNode } from 'react'
import ThemeToggle from '@components/ThemeToggle'
import SkipNav from '@components/SkipNav'

interface ResumeLayoutProps {
  navigation: ReactNode
  children: ReactNode
}

export default function ResumeLayout({
  navigation,
  children,
}: ResumeLayoutProps) {
  return (
    <div className="resume-layout">
      <SkipNav />
      <div className="resume-layout__background" aria-hidden="true" />
      <div className="resume-layout__container">
        <aside
          className="resume-layout__sidebar"
          aria-label="Navigation and theme"
        >
          <div className="resume-layout__theme-toggle">
            <ThemeToggle />
          </div>
          {navigation}
        </aside>
        <main id="main-content" className="resume-layout__content">
          {children}
        </main>
      </div>
    </div>
  )
}
