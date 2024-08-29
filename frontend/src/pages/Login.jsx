import React, { useEffect } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import userState from '../atoms/userStateAtom'

function Login() {
  const navigate = useNavigate()

  const [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(userState)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/pets'); // Redirect to pets page if already logged in
    }
  }, [isUserLoggedIn, navigate]);
  
  const loginBtn = async () => {
      const response = await axios.post('http://localhost:3000/api/v1/users/login',{
          username,
          password
      })

      const data = await response.data
      if(!data.success){
        toast(data.message)
      }
      else{
        localStorage.setItem('token',data.token)
        setIsUserLoggedIn(true)
        navigate('/pets')
      }
      console.log(data)
  }
  return (
    <div className='h-screen bg-color flex justify-center items-center'>
      <div><Toaster position="top-right"/></div>
        <div className='h-[85vh] w-[35vw] bg-white rounded-2xl shadow-2xl'>

          <div className='flex justify-center h-[5rem] items-center text-5xl '>
            Login !! 
          </div>
          <p 
            className='p-0 m-0 flex justify-center mb-8 cursor-pointer hover:text-sky-500'
            onClick={()=>{
              navigate('/signup')
            }}
            >Signup here</p>
          <div className='flex justify-center flex-col items-center gap-[2rem] text-2xl'>
            <div className='border-2 border-black p-2 rounded-xl '>
                <div>Username</div>
                <input 
                      type="text" 
                      placeholder='Enter Username' 
                      value={username} 
                      onChange={(e)=>{
                        setUsername(e.target.value)
                      }} 
                      className='focus:outline-none' />
            </div>
            <div className='border-2 border-black p-2 rounded-xl '>
                <div>Password</div>
                <input 
                      type="password" 
                      placeholder='Enter Password' 
                      value={password} 
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }} 
                      className='focus:outline-none' />
            </div>
            <div className='mt-5'>
                <div 
                    className='bg-color p-4 rounded-lg shadow-xl cursor-pointer hover:scale-105 '
                    onClick={()=>{
                      loginBtn()
                    }}
                    >Submit</div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Login