import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Crono from './Crono';

const root = ReactDOM.createRoot(document.getElementById('root'));
const crono = ReactDOM.createRoot(document.getElementById('crono'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
crono.render(
  <React.StrictMode>
    <Crono/>
  </React.StrictMode>
)
reportWebVitals();
