import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/global.css'
import './index.css'
import Router from './components/ui/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
