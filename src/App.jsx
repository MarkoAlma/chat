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
    <div className='fodiv' style={{display:'flex', padding: '20px', flexDirection:'column', justifyContent:'center', alignItems:'center', boxShadow:'1px 1px 5px 2px gray', width:'fit-content',   borderRadius:'10px',maxHeight:'90vh'}}>
      <h1 style={{marginBottom:'10px'}}>ChatRoom</h1>
      {user ? <>
        <div className="user-info">
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>{user.photoURL && <img className='kep' style={{height:'40px'}} src={user.photoURL} alt="fotó" referrerPolicy="no-referrer"/>}
          <span>{user.displayName}</span> </div>
          <Button className='gomb'   sx={{
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
