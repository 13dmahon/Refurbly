import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SuccessPage from './components/SuccessPage.jsx'
import FirebaseDiagnostic from './components/FirebaseDiagnostic.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

// Load error overlay in dev only (no await needed)
if (import.meta.env.DEV) {
  import('./setupGlobalErrorOverlay.js')
}

console.log('🚀 App loading')

// TEMPORARY: Show diagnostic page
const SHOW_DIAGNOSTIC = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {SHOW_DIAGNOSTIC ? (
      <FirebaseDiagnostic />
    ) : (
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    )}
  </StrictMode>,
)

console.log('✅ React rendered')
