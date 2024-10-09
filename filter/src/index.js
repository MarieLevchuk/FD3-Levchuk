import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import wordsArr from './words.json';
import Filter from './components/Filter/Filter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Filter words={wordsArr}/>
  </React.StrictMode>
);

reportWebVitals();
