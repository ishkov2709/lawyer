import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/lora';
import '@fontsource/lora/400.css';
import '@fontsource/lora/500.css';
import './index.css';
import './styles/keyframes.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
