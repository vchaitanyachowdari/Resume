import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/fonts.css'
import '@styles/global.css'
import '@styles/components.css'
import '@styles/theme-toggle.css'
import '@styles/skeleton.css'
import '@styles/interactive.css'
import '@styles/accessibility.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
