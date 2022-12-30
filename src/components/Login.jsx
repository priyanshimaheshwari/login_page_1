import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

const Login = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-700'>
        
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src="https://images.pexels.com/photos/7002678/pexels-photo-7002678.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/"/>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-700 sm:max-w-[800px]'>
        <div className=' sm:block'>
            <img className='max-w-[400px] w-full mx-auto h-[550px] object-cover  py-20' src='https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
        </div>
        <div className='flex justify-center items-center h-full'>
           <form className='max-w-[400px] w-full mx-auto bg-white p-2 '>
               <h2 className='text-4xl font-bold text-center py-3 '>Code <span className='text-gray-500'>Hack</span></h2>
               <div className='flex justify-around  py-2'>
               <p className='border shadow-lg hover:shadow-xl px-4 py-2 relative flex items-center rounded-2xl hover:bg-indigo-300'><AiFillFacebook className='mr-2' /><a href='https://www.facebook.com/login/'><button>Facebook</button></a></p>
                   <p className='border shadow-lg hover:shadow-xl px-4 py-2 relative flex items-center rounded-2xl hover:bg-indigo-300'><FcGoogle className='mr-4' /><a href="https://www.google.com/"><button>Google</button></a></p>
                   </div>
                   <div className='flex flex-col mb-4'>
                       <label>Username</label>
                       <input className='border relative bg-gray-100 p-1 mr-2 rounded-2xl' type='text' />
                       <label>Password</label>
                       <input className='border relative bg-gray-100 p-1 mr-2 rounded-2xl'type='password' />
                   </div>
                   <button className='w-full py-3 mt-2 bg-gray-600 hover:bg-indigo-300 relative text-white rounded-2xl'>Sign In</button>
                   <p className='flex items-center mt-2'><input className='mr-2 relative' type="checkbox"  />Remember Me</p>
                   Not a member? 
            <button  className='text-center mt-2 relative text-gray-300 hover:text-indigo-400'> Sign Up</button>
           </form>
        </div>
        </div> 
    </div>
  )
}

export default Login