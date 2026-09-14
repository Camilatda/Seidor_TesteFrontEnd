// Atua como o "Ponto de Ignição" — a ponte definitiva entre o mundo do React (código JavaScript/TypeScript) e o mundo do navegador (o HTML tradicional).

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)