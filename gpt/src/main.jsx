import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from './Layouts/RootLayout/RootLayout.jsx'
import HomePage from "./routes/Homepage/Homepage.jsx"
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout.jsx'
import Dashboard from "./routes/Dashboard/Dashboard.jsx"
import ChatPage from "./routes/ChatPage/ChatPage.jsx"
import SignUpPage from './routes/SignUp/SignUp.jsx'
import SignInPage from './routes/SignIn/SignIn.jsx'


const router = createBrowserRouter([
  {
    element : <RootLayout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />
      },
      {
        element : <DashboardLayout/>,
        children : [
          {
            path : "/dashboard",
            element : <Dashboard/>
          },
          {
            path : '/dashboard/chats/:id',
            element : <ChatPage/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
