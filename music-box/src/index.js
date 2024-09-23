import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Musicas from "./pages/Musicas/musicas";
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));//criei a araiz

root.render( //renderizei a raiz
  <React.StrictMode>
    <Musicas />
  </React.StrictMode>
);

