import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './css/root.css';
import './css/index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);