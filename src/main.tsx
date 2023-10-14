import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/components/App.tsx';
import './sass/main.scss';

const root = document.querySelector('.root') as HTMLDivElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
