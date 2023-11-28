import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ParentComponent from './ParentComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
)
