import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
