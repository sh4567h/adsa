import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Nav from './comonent/navbar/Nav'
import Home from './comonent/Home/Home'
import About from './comonent/About/About'
import Layout from './comonent/layout/Layout'
import Blog from './comonent/blog/Blog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hidden from './comonent/blog/hiddenPage/Hidden'
import NotFound from './comonent/notFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
       { path: 'blog', element: <Blog />},
        { path: 'hidden', element: <Hidden /> },
         { path: '*', element: <NotFound /> },
  
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}








