import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {  useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import userState from '../atoms/userStateAtom'

function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(userState)

    useEffect(() => {
      if (isUserLoggedIn) {
        navigate('/pets'); // Redirect to pets page if already logged in
      }
    }, [isUserLoggedIn, navigate]);

    const signupBtn = async () => {

      const response = await axios.post('http://localhost:3000/api/v1/users/signup',{
          username,
          email,
          password,
          name
        }
      )

      const data = await response.data

      if(!data.success){
         toast(data.message)
      }else{
        localStorage.setItem('token',data.token)
        setIsUserLoggedIn(true)
        navigate('/pets')
      }
      console.log(data)
    }

  return (
    <div className='h-screen bg-color flex justify-center items-center'>
        <Toaster position='top-right'/>
        <div className='h-[85vh] w-[35vw] bg-white rounded-2xl shadow-2xl'>

          <div className='flex justify-center h-[5rem] items-center text-5xl '>
            SignUp !! 
          </div>
          <p 
            className='p-0 m-0 flex justify-center mb-5 cursor-pointer hover:text-sky-500'
            onClick={()=>{
              navigate('/login')
            }}
            >login here</p>
          <div className='flex justify-center flex-col items-center gap-[1rem] text-md'>
            
            <div className='border-2 border-black p-2 rounded-xl w-[17rem]'>
                <div>Name</div>
                <input 
                  type="text" 
                  placeholder='Enter Name' 
                  className='focus:outline-none'
                  value={name}
                  onChange={(e)=> {
                    setName(e.target.value)
                  }}
                   />
            </div>
            
            
            <div className='border-2 border-black p-2 rounded-xl w-[17rem] '>
                <div>Username</div>
                <input 
                  type="text" 
                  placeholder='Enter Username' 
                  className='focus:outline-none'
                  value={username}
                  onChange={(e)=>{
                    setUsername(e.target.value)
                  }} />
            </div>

            <div className='border-2 border-black p-2 rounded-xl w-[17rem]'>
                <div>Email</div>
                <input 
                  type="text" 
                  placeholder='Enter Email' 
                  className='focus:outline-none'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }} />
            </div>
            
            <div className='border-2 border-black p-2 rounded-xl w-[17rem]'>
                <div>Password</div>
                <input 
                  type="password" 
                  placeholder='Enter Password' 
                  className='focus:outline-none'
                  value={password}
                  onChange={(e) =>{
                    setPassword(e.target.value)
                  }} />
            </div>
            <div className='mt-3'>
                <div 
                className='bg-color p-4 rounded-lg shadow-xl cursor-pointer hover:scale-105 w-[7rem] text-center'
                onClick={()=>{
                  signupBtn()
                }}
                >Submit</div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Signup