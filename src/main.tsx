import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './router/router.tsx';
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './tanStack/config.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools/>
    </QueryClientProvider>

  </React.StrictMode>,
)
