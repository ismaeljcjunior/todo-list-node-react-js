import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
)
