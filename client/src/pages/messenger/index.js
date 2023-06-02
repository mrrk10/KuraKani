import Styles from "../../styles/messenger.module.css"
import Message from "@/components/message"
import Conversation from "@/components/conversation"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import axios from "axios"
const Messenger = () => {
    const[conversations,setConversations]=useState([])
    const {_id}  =useSelector((state) => (state))
 console.log('id>>',_id)

   
    useEffect(()=>{
        const getUserConversation=async()=>{
            try {
            const res=await axios.get('http://localhost:4000/conversation/'+_id)
           
            // setConversations(res.data)
            console.log('conversations',res)

                
            } catch (error) {
                console.log(error)
                
            }
        }
        getUserConversation();
    },[_id])

    return (
        <div className={Styles.chatContainer}>
            <div className={Styles.conversatonContainer}>
                
                    {
                        conversations.map((c)=>{
                            return(
                        <Conversation conversations={c} currentUser={_id}/>

                            )
                            
                        })
                    }

                  
                

               
            </div>
            <div>
            <div className={Styles.chatWrapper}>
                <Message />
                <Message own={true}/>
                <Message  />
                <Message  own={true}/>
                <Message  />
                <Message  own={true}/>
                <Message  />
                <Message  />
                <Message  />
                
            
    
            </div>
            <div className={Styles.chatButtom}>
                    <textarea className={Styles.textarea} name="" id="" cols="30" 
                    rows="10" placeholder="write something..."></textarea>
               
                
                    <button className={Styles.btn}>send</button>
              

                    </div>
                    </div>

           
    
        </div>
        
      )

}
 


export default Messenger