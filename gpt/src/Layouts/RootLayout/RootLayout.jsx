import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
import Logo from "../../assets/react.svg"

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
            <img src={Logo} alt="" />
            <span>LOGO</span>
            </Link>
            <div className="user">USER</div>
        </header>
        <main className='main'>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout