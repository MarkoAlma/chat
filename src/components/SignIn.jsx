import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebaseApp'

const SignIn = () => {

    const handleSignIn = async () => {
        await signInWithPopup(auth, provider)
    }

  return (

    <div className='signin'>
      <p>Sign In</p>
      <button onClick={handleSignIn}>Google</button>
    </div>
  )
}

export default SignIn
