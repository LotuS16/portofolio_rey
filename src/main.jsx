import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Pastikan file CSS ini terpanggil! Jika kamu memindahkannya ke folder styles, 
// ubah jalurnya menjadi './styles/index.css'
import './styles/index.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)