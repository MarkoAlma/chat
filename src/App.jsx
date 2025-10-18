import { useState } from 'react'
import './App.css'
import Chatroom from './components/Chatroom'
import SignIn from './components/SignIn'
import { useEffect } from 'react'
import { auth } from './firebaseApp'
import { signOut } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(setUser)
    return unsubscribe
  },[])

  user && console.log(user);
  

  return (
    <div>
      <h1>ALMA</h1>
      {user ? <>
        <div className="user-info">
          <img src={user.photoURL} alt="fotó" />
          <span>{user.displayName}</span>
          <button onClick={()=>signOut(auth)}>Sign Out</button>
        </div>
        <Chatroom user={user}/>
      </>:
        <SignIn/>

    }
    </div>
  )
}

export default App
