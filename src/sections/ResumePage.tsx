import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import ResumeLayout from '@components/layout/ResumeLayout'
import SectionNav from '@components/navigation/SectionNav'
import AboutSection from '@sections/AboutSection'
import CertificationsSection from '@sections/CertificationsSection'
import ContactSection from '@sections/ContactSection'
import EducationSection from '@sections/EducationSection'
import ExperienceSection from '@sections/ExperienceSection'
import FooterSection from '@sections/FooterSection'
import HeroSection from '@sections/HeroSection'
import HobbiesSection from '@sections/HobbiesSection'
import ProjectsSection from '@sections/ProjectsSection'
import SkillsSection from '@sections/SkillsSection'
import {
  defaultSectionId,
  isSectionId,
  sectionIds,
  sectionNavItems,
  type SectionId,
} from '@data/navigation'
import { seoData } from '@data/profile'
import '@styles/resume.css'

interface RouteParams {
  sectionId?: string
}

export default function ResumePage() {
  const { sectionId } = useParams<RouteParams>()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSectionId)

  const targetSection = useMemo(
    () => (sectionId && isSectionId(sectionId) ? sectionId : undefined),
    [sectionId],
  )

  useEffect(() => {
    if (sectionId && !isSectionId(sectionId)) {
      navigate('/', { replace: true })
    }
  }, [navigate, sectionId])

  useEffect(() => {
    if (!targetSection) {
      if (!sectionId) {
        setActiveSection(defaultSectionId)
      }
      return
    }

    setActiveSection(targetSection)

    const element = document.getElementById(targetSection)
    if (!element) {
      return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [sectionId, targetSection])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') {
        return
      }

      const scrollOffset = window.innerHeight * 0.25
      let currentId: SectionId = defaultSectionId

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) {
          continue
        }
        const rect = element.getBoundingClientRect()
        if (rect.top - scrollOffset <= 0) {
          currentId = id
        }
      }

      setActiveSection((prev) => (prev === currentId ? prev : currentId))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = (
    <SectionNav items={sectionNavItems} activeId={activeSection} />
  )

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta
          name="keywords"
          content={seoData.keywords.join(', ')}
        />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seoData.twitterHandle} />
      </Helmet>
      <ResumeLayout navigation={navigation}>
        <HeroSection />
        <div className="resume-grid">
          <AboutSection className="resume-grid__sidebar" />
          <ExperienceSection className="resume-grid__main" />
          <ProjectsSection className="resume-grid__main" />
          <SkillsSection className="resume-grid__sidebar" />
          <EducationSection className="resume-grid__sidebar" />
          <CertificationsSection className="resume-grid__main" />
          <HobbiesSection className="resume-grid__sidebar" />
          <ContactSection className="resume-grid__full" />

        <FooterSection />
      </ResumeLayout>
    </>
  )
}
