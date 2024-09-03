import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Custom from './components/Custom/Custom.jsx'
import Github from './components/Github/Github.jsx'

// One more way to do the following is in sir's code, it also has a loader concept which optimizes api call by calling the apu as soon as cursor reaches its button without even clicking(refer Hitesh Sir folder)
const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"custom/:id",
        element:<Custom />
      },
      {
        path:"github",
        element:<Github />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
