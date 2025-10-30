import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ResumeLayout from '@components/layout/ResumeLayout'
import SectionNav from '@components/navigation/SectionNav'
import LazySection from '@components/LazySection'
import { SEO } from '@components/SEO'
import AboutSection from '@sections/AboutSection'
import ExperienceSection from '@sections/ExperienceSection'
import FooterSection from '@sections/FooterSection'
import HeroSection from '@sections/HeroSection'
import SkillsSection from '@sections/SkillsSection'
import {
  defaultSectionId,
  isSectionId,
  sectionIds,
  sectionNavItems,
  type SectionId,
} from '@data/navigation'
import { getSectionSEO } from '@data/seoData'
import { useWebVitals } from '@hooks/useWebVitals'
import { getAllStructuredData } from '@utils/structuredData'
import '@styles/resume.css'

interface RouteParams extends Record<string, string | undefined> {
  sectionId?: string
}

export default function ResumePage() {
  const { sectionId } = useParams<RouteParams>()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] =
    useState<SectionId>(defaultSectionId)

  useWebVitals({
    reportToConsole: true,
    reportToAnalytics: false,
  })

  const targetSection = useMemo(
    () => (sectionId && isSectionId(sectionId) ? sectionId : undefined),
    [sectionId]
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

  const sectionSEO = getSectionSEO(activeSection)
  const baseUrl = 'https://www.chowdari.in/resume'
  const canonicalUrl =
    activeSection === 'hero' ? baseUrl : `${baseUrl}/${activeSection}`

  const structuredData = useMemo(() => getAllStructuredData(), [])

  return (
    <>
      <SEO
        title={sectionSEO.title}
        description={sectionSEO.description}
        keywords={sectionSEO.keywords}
        canonicalUrl={canonicalUrl}
        ogImage={sectionSEO.ogImage}
        twitterHandle="@vchaitanyachai"
        structuredData={structuredData}
      />
      <ResumeLayout navigation={navigation}>
        <HeroSection />
        <div className="resume-grid">
          <AboutSection className="resume-grid__sidebar" />
          <ExperienceSection className="resume-grid__main" />
          <LazySection
            importFn={() => import('@sections/ProjectsSection')}
            className="resume-grid__main"
            preloadDistance={300}
          />
          <SkillsSection className="resume-grid__sidebar" />
          <LazySection
            importFn={() => import('@sections/EducationSection')}
            className="resume-grid__sidebar"
            preloadDistance={300}
          />
          <LazySection
            importFn={() => import('@sections/CertificationsSection')}
            className="resume-grid__main"
            preloadDistance={300}
          />
          <LazySection
            importFn={() => import('@sections/HobbiesSection')}
            className="resume-grid__sidebar"
            preloadDistance={300}
          />
          <LazySection
            importFn={() => import('@sections/ContactSection')}
            className="resume-grid__full"
            preloadDistance={300}
          />
        </div>

        <FooterSection />
      </ResumeLayout>
    </>
  )
}
