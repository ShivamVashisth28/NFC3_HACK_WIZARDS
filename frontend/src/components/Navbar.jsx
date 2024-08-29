import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    return (
    <div>
        <div className='h-[5rem] flex border-black border-b-2  justify-between items-center'>
            <div className='text-5xl ml-12 '>
                FLOOFIES
            </div>
            <div className='flex gap-5 mr-5 '>
                <div className='hover:underline cursor-pointer'>About</div>
                <div className='hover:underline cursor-pointer'>Contact</div>
                <div className='hover:underline cursor-pointer'>PetWorld</div>
                <div 
                    className='hover:underline cursor-pointer'
                    onClick={()=>{
                        navigate('/login')
                    }}
                    >Login</div>
            </div>
        </div>
    </div>
    )
}

export default Navbar