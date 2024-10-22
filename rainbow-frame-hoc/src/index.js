import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DoubleButton from './components/DoubleButton/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ text => alert(text) }>вышел, был сильный</FramedDoubleButton>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
