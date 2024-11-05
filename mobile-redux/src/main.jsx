import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import clients from './clients.json';
import './index.css'
import MobileCompany from './components/MobileCompany/MobileCompany.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileCompany initclients={clients} />
  </StrictMode>,
)
