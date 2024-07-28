import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/utils'
import { GameProvider } from '@/components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameProvider>
        <App />
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>
)
