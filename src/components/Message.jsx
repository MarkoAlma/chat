import React from 'react'

const Message = ({msg, currentUser}) => {
  const en = msg.uid==currentUser
  return (
    <div className={`${en?'jobbra':''}`} style={{display:'flex',  alignItems:'end', gap:'10px', borderRadius:'10px', padding:'2px'}}>
      <img style={{ borderRadius:'50%', height:'35px'}} src={msg.photoURL} alt="" />
      <div className={`${en?'en':'balra'}`} style={{display:'flex', flexDirection:'column', alignItems:'start', borderRadius:'10px', padding:'10px', gap:'3px'}}>
        <div style={{fontWeight:'bold'}}>{msg.displayName}</div>
        <div style={{display:'flex', width:'100%' , justifyContent:'space-between', gap:'3px'}}>
          <div>{msg.text}</div>
          <div style={{fontSize:'smaller', color:'gray', display:'flex', alignItems:'end'}}>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      </div>
    </div>
  )
}

export default Message
