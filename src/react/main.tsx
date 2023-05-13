import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Pages from './pages'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('../../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(<Pages />)
    })
} else {
  root.render(<App />)
}
