import { useState } from 'react'
import './App.css'
import Chatroom from './components/Chatroom'
import SignIn from './components/SignIn'
import { useEffect } from 'react'
import { auth } from './firebaseApp'
import { signOut } from 'firebase/auth'
import { Button } from '@mui/material'

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(setUser)
    return unsubscribe
  },[])

  user && console.log(user);
  

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', boxShadow:'1px 1px 5px 2px gray', width:'fit-content',   borderRadius:'10px'}}>
      <h1>ChatRoom</h1>
      {user ? <>
        <div className="user-info">
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>{user.photoURL && <img style={{height:'40px'}} src={user.photoURL} alt="fotó" />}
          <span>{user.displayName}</span> </div>
          <Button   sx={{
    color: 'red',
    borderColor: 'red',
    '&:hover': {
      backgroundColor: 'rgba(255,0,0,0.04)', // halvány piros háttér
      borderColor: 'red',
    },
  }} variant="outlined" onClick={()=>signOut(auth)}>Sign Out</Button>
        </div>
        <div><Chatroom user={user}/></div>
      </>:
        <SignIn/>

    }
    </div>
  )
}

export default App
