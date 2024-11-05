import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import clients from './clients.json';
import MobileCompany from './components/MobileCompany/MobileCompany';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MobileCompany initclients={clients}/>
);
// root.render(
//   <React.StrictMode>
//     <MobileCompany initclients={clients}/>
//   </React.StrictMode>
// );
reportWebVitals();
