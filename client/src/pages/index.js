import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { message } from 'antd';
const inter = Inter({ subsets: ['latin'] })
import Styles from './../styles/Home.module.css'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetails } from './redux/reducers/reducerSlice/userSlice'
import { useRouter } from 'next/router';
import Chat from './chat/index.js'
const Home=()=> {
  const [messageApi, contextHolder] = message.useMessage();
  const[loginData,setLoginData]=useState({
    email:'',
    password:'' 
  })
  // const {fullname,pic} = useSelector((state) => state)
  // console.log(fullname,pic)
  const dispatch=useDispatch();
  const router=useRouter()

  // console.log(token)
  
  const handleLogin=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setLoginData({...loginData,[name]:value})
  }

 

 
  const fetchUser=async(values)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
  const res= await fetch('http://localhost:4000/login',  requestOptions)
  const data=await res.json();  //checking for token
  // console.log(data.userDetails) 
  if(data.success){
    messageApi.success(data.message)
    data.userDetails.token=data.token
    
    dispatch(setUserDetails(data.userDetails))
    // dispatch(setToken(data.token))
  }
  else{
    messageApi.error(data.message)
  }
}
const handleLogout=()=>{
  dispatch(setToken(''))
} 

// if(token){
//   return(
 
//     <Chat/>
//   )
// }
// else{
  return(
    <>
  <div style={{textAlign:'center'}}>
        <Image
      src="/kurakani.png"
      width={600}
      height={80}
      alt="Picture of the author"
    />
        </div>
      <div className={Styles.loginCss} >
     
        
      <div >
      <h1 style={{marginBottom:'10px'}}>Login In</h1>
        <input type='text' placeholder='Email' name='email' onChange={handleLogin} autoComplete='off' value={loginData.email} />
        <br/> <br/>
        <input type='password' placeholder='Psssword'name='password'onChange={handleLogin} autoComplete='off' value={loginData.password}/>
        <br/> <br/>
        <button onClick={()=>fetchUser(loginData)}>login</button>
      </div>
      {contextHolder}
      <p style={{marginTop:'10px'}}>Don't have an account?  <Link href="/register">Sign up?</Link></p>
      </div>
    </>
  
  )
// }
}

 



export default Home