import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { router } from './router/router'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './tanStack/config'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ProductContextProvider } from './context/products'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)

