import { Outlet } from 'react-router-dom'
import './dashboardLayout.css'
import { useEffect } from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Link, useNavigate } from 'react-router-dom'

const DashboardLayout = () => {

  const { userId , isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in')
    }
  }, [isLoaded, navigate, userId])
   
  if(!isLoaded){
    return "Loading..."
  }

  return (
    <div className='dashboardLayout'>
        <div className="menu">Menu</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout