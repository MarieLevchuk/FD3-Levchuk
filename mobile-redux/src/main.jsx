import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MobileCompany from './components/MobileCompany/MobileCompany.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileCompany />
  </StrictMode>,
)