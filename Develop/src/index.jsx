import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp.jsx';
import './styles/app.css';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
