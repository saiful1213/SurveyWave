import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProviders from './Providers/AuthProviders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Routes}>
            </RouterProvider>
          </QueryClientProvider>
        </AuthProviders>
      </HelmetProvider>
      <ToastContainer />
    </div>
  </React.StrictMode>,
)
