import React from 'react'
import Header from './Header'
import {useState} from 'react';

const Login = () => {
  
  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
    //if not true 
  };
 
  return (
    <div>
      <Header/>

      <div className='absolute'>

      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt='logo'/>
      </div>

      <form className='p-12 rounded-lg bg-opacity-80 bg-black absolute w-1/3 my-36 mx-auto right-0 left-0 text-white'>
      
      
      
      
      <h1 className='font-bold text-3xl py-4'>

        {isSignInForm ? "Sign In" : "Sign Up"}

      </h1>

      {!isSignInForm && (<input type='text' placeholder="Full Name" className="p-4 my-4 bg-gray-600 w-full"/>
      )}

        <input type='text' placeholder="Email Address" className="p-4 my-4 bg-gray-600 w-full"/>
        <input type='password' placeholder="Password" className="p-4 my-4 bg-gray-600 w-full"/>
        
        
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> 

        {isSignInForm ? "Sign In" : "Sign Up"}
        
        </button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
        
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign Up Now"}
        
        </p>

      </form>


    </div>
  )
}

export default Login