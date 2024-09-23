import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));//criei a araiz

root.render( //renderizei a raiz
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

