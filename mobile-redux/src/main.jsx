import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'; 
import store from './redux/store.js';
import './index.css'
import MobileCompany from './components/MobileCompany/MobileCompany.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MobileCompany initclients={clients} />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MobileCompany />
  </Provider>
)
