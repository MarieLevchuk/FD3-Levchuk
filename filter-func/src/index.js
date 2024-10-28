import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Filter from './cmponents/Filter/Filter';
import words from './words.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Filter words={words}/>
  </React.StrictMode>
);

reportWebVitals();
