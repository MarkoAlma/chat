import { signInWithPopup } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from '../firebaseApp'
import { Button } from '@mui/material';

const SignIn = () => {

    const handleSignIn = async () => {
        await signInWithPopup(auth, provider)
    }

  return (

    <div className='signin'>
      <b>Sign In</b>
      <Button onClick={handleSignIn}><FaGoogle /></Button>
    </div>
  )
}

export default SignIn
