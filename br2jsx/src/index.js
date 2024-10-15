import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextColumn from './components/TextColumn/TextColumn';

const text = "первый<br>второй<br/>третий<br />последний";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextColumn text={text}/>
  </React.StrictMode>
);

reportWebVitals();
