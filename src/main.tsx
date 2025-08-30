import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "modern-normalize";

import App from './components/App/App';

// Глобальні стилі (додатково)
// import "./global.css";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
