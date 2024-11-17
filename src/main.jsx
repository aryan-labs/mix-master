import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import StoreContextProvider from './context.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
    </QueryClientProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
