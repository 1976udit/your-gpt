import './SignUp.css'
import { SignUp } from '@clerk/clerk-react'

const SignUp = () => {
  return (
    <div className='signUp'>
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignUp