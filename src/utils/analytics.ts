export interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== 'undefined') {
    console.log('[Analytics Event]', event)

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      })
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: event.action,
        eventCategory: event.category,
        eventLabel: event.label,
        eventValue: event.value,
      })
    }
  }
}

export function trackDownload(fileName: string): void {
  trackEvent({
    category: 'Download',
    action: 'resume_download',
    label: fileName,
  })
}

export function trackFormSubmission(formName: string, success: boolean): void {
  trackEvent({
    category: 'Form',
    action: success ? 'form_submission_success' : 'form_submission_error',
    label: formName,
  })
}

export function trackProjectInteraction(
  projectId: string,
  interactionType: 'view' | 'click' | 'close'
): void {
  trackEvent({
    category: 'Project',
    action: `project_${interactionType}`,
    label: projectId,
  })
}

export function trackSocialClick(platform: string): void {
  trackEvent({
    category: 'Social',
    action: 'social_click',
    label: platform,
  })
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, unknown>
    ) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}
