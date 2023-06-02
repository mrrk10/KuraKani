import { setToken } from "../redux/reducers/reducerSlice/userSlice"
import { useDispatch } from "react-redux"
import Styles from '../../styles/Chat.module.css'
import { io } from 'socket.io-client';
const socket = io("http://localhost:4000");
import { useEffect, useState } from "react";
const Chat=()=>{
    const[currentMessage,setMessage]=useState("")
    const[room,setRoom]=useState("")
    const[msgList,setMsgList]=useState([])


    const sendMsg=()=>{
        let Content={
            room:room,
            msgcontent:{
                message:currentMessage

            }
        }
       socket.emit("send_message",Content)
        setMsgList((msgList)=>[...msgList,Content.msgcontent])
        setMessage("")
    }
  
    const handleJoin=()=>{
        if(room!=""){
            socket.emit("join_room",room)
           

        }
    }
    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            // const arr=[...msgList,data]  
            setMsgList((msgList)=>[...msgList,data])
            // console.log(data)
        })
    },[socket])
    return(
        <>
          <div className={Styles.container}>
            <div>
                
                <input onChange={(e)=>{setRoom(e.target.value)}} />
                <button onClick={handleJoin}>Join Room</button>

            </div>


            <div className={Styles.inputFiled}>
            <input onChange={(e)=>{setMessage(e.target.value)}} /> <br/>
                </div>
            
            <button onClick={sendMsg} >Send Message</button>
            <br/>
            {JSON.stringify(msgList)}
            {
                msgList.map((val,key)=>{
                    return(
                        <h1>
                            {val.message}
                          
                            </h1>
                    )

                })
            } 
   </div>
        </>
    )
}
export default Chat