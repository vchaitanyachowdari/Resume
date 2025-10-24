import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { profile } from '@data/profile'

const queryClient = new QueryClient()

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div
            style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          >
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.description}</p>
            <p style={{ marginTop: '2rem', color: '#666' }}>
              🚧 React foundation is set up! Ready for component migration. 🚧
            </p>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
