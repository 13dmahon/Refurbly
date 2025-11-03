import './setupGlobalErrorOverlay'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SuccessPage from './components/SuccessPage.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

console.log('🚀 App loading')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  </StrictMode>,
)

console.log('✅ React rendered')
