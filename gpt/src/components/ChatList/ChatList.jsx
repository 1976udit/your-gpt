import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatList'>
          <span className="title">DASHBOARD</span>
          <Link to="/dashboard">Create a new Chat</Link>
          <Link to="/">Explore Lama AI</Link>
          <Link to="/">Contact</Link>
          <hr />
          <span className="title">RECENT CHATS</span>
          <hr/>

    </div>
  )
}

export default ChatList