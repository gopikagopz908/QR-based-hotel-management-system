import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthContextProvider } from './context/authContext.jsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
           <App /> 
    </AuthContextProvider>
    </QueryClientProvider>

  </StrictMode>,
)
