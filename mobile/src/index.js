import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import clients from './clients.json';
import MobileCompany from './components/MobileCompany/MobileCompany';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MobileCompany clients={clients}/>
  </React.StrictMode>
);
reportWebVitals();
