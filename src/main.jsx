import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { KeranjangProvider } from './context/KeranjangContext'
import { AuthProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <KeranjangProvider>
          <App />
        </KeranjangProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
                                                    