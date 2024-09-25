import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Shop from './components/Shop/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shop shopname="iShop - 0" address="221b Baker St, Marylebone, London"/>
  </React.StrictMode>
);

reportWebVitals();
