import React, { StrictMode } from 'react';  // Pastikan React diimport
import { createRoot } from 'react-dom/client'; // Mengimpor createRoot untuk React 18
import App from './App.jsx';  // Mengimpor komponen utama

// Membuat root aplikasi dan merender aplikasi di dalam root element
const rootElement = document.getElementById('root');  // Mendapatkan element root
const root = createRoot(rootElement);  // Membuat root aplikasi dengan createRoot

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
