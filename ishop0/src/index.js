import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Shop from './components/Shop/Shop';
import goodsArr from './goods.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shop shopName="iShop - 3" address="221b Baker St, Marylebone, London" goods={goodsArr}/>
  </React.StrictMode>
);

reportWebVitals();
