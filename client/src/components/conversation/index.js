import { useState } from 'react';
import Styles from '../../styles/conversation.module.css'
import defaultImg from '/home/jude/Kurakani/client/public/default.jpg'
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios';
const Conversation = ({conversations,currentUser}) => {
  const[user,setUser]=useState(null)
  // console.log(user)

  useEffect(()=>{
    const friendId=conversations.members.find(m=>m !==currentUser)
    // console.log('>>',friendId)
    
    const getUser=async()=>{
      try {
      const res=await axios("http://localhost:4000/users?userId="+"64772a502d881ada8c584adc")
console.log(res)
        setUser(res.data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getUser()
  },[currentUser,conversations])

  return (
    <div className={Styles.conversation}>
    <Image
      className={Styles.conversationImg}
      src={defaultImg}
      alt="avatar"
    />
    {/* {
      user.map((c)=>{
        return()
      })
    } */}
    <span className={Styles.conversationName}>user</span>
  </div>

  )
}

export default Conversation