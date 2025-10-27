import type { ReactNode } from 'react'
import ThemeToggle from '@components/ThemeToggle'

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
      <div className="resume-layout__background" />
      <div className="resume-layout__container">
        <aside className="resume-layout__sidebar">
          <div className="resume-layout__theme-toggle">
            <ThemeToggle />
          </div>
          {navigation}
        </aside>
        <div className="resume-layout__content">{children}</div>
      </div>
    </div>
  )
}
