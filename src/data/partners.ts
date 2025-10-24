import googleLogo from '@assets/images/company/google_logo.png'
import metaLogo from '@assets/images/company/meta_logo.svg'
import startupIndiaLogo from '@assets/images/company/startup_india_logo.png'

export interface Partner {
  id: string
  name: string
  description: string
  image: string
  alt: string
}

export const partners: Partner[] = [
  {
    id: 'google',
    name: 'Google',
    description: 'Technology Partner and Collaboration',
    image: googleLogo,
    alt: 'Google - Technology Partner and Collaboration',
  },
  {
    id: 'meta',
    name: 'Meta',
    description: 'Technology Partner and Collaboration',
    image: metaLogo,
    alt: 'Meta - Technology Partner and Collaboration',
  },
  {
    id: 'startup-india',
    name: 'Startup India',
    description: 'Government Initiative Recognition',
    image: startupIndiaLogo,
    alt: 'Startup India - Government Initiative Recognition',
  },
]
