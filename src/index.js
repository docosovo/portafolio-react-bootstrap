import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilos de Bootstrap (CSS + iconos) -> deben importarse antes del CSS propio
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
