import './App.css'
import './mediaq.css'
import './home.css'
import './register.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Loginpage from './components/Loginpage.jsx'
import Registerpage from './components/Registerpage.jsx'
import Homepage from './components/Homepage.jsx'
import Userprofilepage from './components/Userprofilepage.jsx'
import Updatepass from './components/Updatepass.jsx'
import Updateprofile from './components/Updateprofile.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Loginpage/>
      },
      {
        path: "register",
        element: <Registerpage />
      },
      {
        path: "home",
        element: <Homepage />
      },      
      {
        path: "profile",
        element: <Userprofilepage />
      },      
      {
        path: "updatepass",
        element: <Updatepass />
      },      
      {
        path: "updateprofile",
        element: <Updateprofile />
      }      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
