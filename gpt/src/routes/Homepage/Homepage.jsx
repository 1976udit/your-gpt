import { Link } from 'react-router-dom'
import {TypeAnimation} from "react-type-animation"
import './Homepage.css'
import { useState } from 'react'

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1")
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital'/>
    <div className="left">
      <h1>Chat GPT</h1>
      <h2>Boost your creativity and productivity..</h2>
      <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A totam numquam deserunt quia, dolore autem.</h3>
      <Link to="/dashboard">Get Started</Link>
    </div>
    <div className="right">
      <div className="imageContainer">
        <div className="bgcontainer">
          <div className="bg"></div>
        </div>
        <img src="/bot.png" alt="" className='bot' />
        <div className="chat">
            <img src={typingStatus === "human1"? "/human1.jpeg" : typingStatus === "human2"? "/human2.jpeg" : "/bot.png"} alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Bob: We produce food for Mice',
                2000, () => (setTypingStatus("Bot") ) ,
                'Bot: We produce food for Hamsters',
                2000, () => (setTypingStatus("human2")),
                'Alice: produce food for Guinea Pigs',
                2000, () => (setTypingStatus("Bot")),
                'Bot: We produce food for Chinchillas',
                2000, () => (setTypingStatus("human1"))
              ]}
              wrapper="span"
              omitDeletionAnimation={true}
              cursor={true}
              repeat={Infinity}
            />
        </div>
      </div>
    </div>
    <div className="terms">
      <img src="logo.png" alt="_blank" />
      <div className="links">
        <Link>Terms of Service</Link>
        <span>|</span>
        <Link>Privacy Policy</Link>
      </div>
    </div>
    </div>
  )
}

export default Homepage