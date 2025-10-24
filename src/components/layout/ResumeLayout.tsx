import type { ReactNode } from 'react'

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
        <aside className="resume-layout__sidebar">{navigation}</aside>
        <div className="resume-layout__content">{children}</div>
      </div>
    </div>
  )
}
