import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { addMessage, readMessages } from '../utils'
import Message from './Message'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import { IoIosSend } from "react-icons/io";

const Chatroom = ({user}) => {

    const [messages, setMessages] = useState([])

    const inputRef = useRef()

    const bottomRef = useRef(null) // ez lesz a scroll anchor

    const handleSubmit = async(e)=> {
        e.preventDefault()
        const text = inputRef.current.value
        console.log(text);
        if (text.trim() === "") return;
        const message = {
            text,
            uid:user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName,
            timestamp:Date.now()
        }
        document.querySelector(".szoveg").value = ""

        await addMessage(message)
                bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(()=>{
      const unsubscribe = readMessages(setMessages)
      return unsubscribe
    },[])

    console.log(messages);
    

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <form className='formdiv' onSubmit={handleSubmit} style={{display:'flex', alignItems:'center',width:'60%', justifyContent:'space-between',gap:'10px'}}>
        <input style={{width:'100%'}} className='szoveg' ref={inputRef} type="text" placeholder='Write a message'/>
        <Button className='gomb' variant="contained" type='submit' endIcon={<IoIosSend />}> Send </Button>
      </form>
      <div className='med' style={{display:'flex', marginTop:'25px', backgroundColor:'lightyellow', borderBottomLeftRadius:'10px', flexDirection:'column', gap:'5px', height:'50vh', width:'80vw', overflowY: 'auto'}}> {messages && messages.map(uzenet=><Message key={uzenet.id} msg={uzenet} currentUser={user.uid}/>)}<div ref={bottomRef} /></div>
    </div>
  )
}

export default Chatroom
