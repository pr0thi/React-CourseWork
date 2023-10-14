import React from 'react'
import Header from './Header'
import {useState,useRef} from 'react';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
  
  const[isSignInForm, setIsSignInForm] = useState(true);

  const[errMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //reference 

  const handleButtonClick = () =>{
    // //validate the form data 
    // checkValidData = 
    // make state variables or use useRef() hook to get reference to input box
    
    //console.log(email); whole object
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value);
    //console.log(message);
    setErrorMessage(message);

    if(message) return;
    // message is present that means error message is present 

    //then you can proceed with Sign in/sign up
  
    //sign in/sign up
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, 
      //here you can insert github as well
      photoURL: "https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXeeIVtmgzU089rwEnRNnxk6Q1GHEkPghoK2PHnziJv4WrrO_QxZ4crVPJIe3wjusYZjCmN1sxolKdCbQ1jli_HtH2hAzsU.png?r=fcd"
    }).then(() => {
      // Profile updated!
      // ...
      
      const {uid,email,displayName, photoURL} = auth.currentUser;

        //if user is present, sign in case 
        //adding to our store 
        dispatch(
          addUser({uid:uid, 
            email:email, 
            displayName: displayName, 
            photoURL: photoURL}));

      
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });


    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage);
  });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+"-"+errorMessage)
  });

    }




  }

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

      <form 
      onSubmit = {(e)=>e.preventDefault()}
      className='p-12 rounded-lg bg-opacity-80 bg-black absolute w-1/3 my-36 mx-auto right-0 left-0 text-white'>
      
      
      
      
      <h1 className='font-bold text-3xl py-4'>

        {isSignInForm ? "Sign In" : "Sign Up"}

      </h1>

      {!isSignInForm && (<input ref={name} type='text' placeholder="Full Name" className="p-4 my-4 bg-gray-600 w-full"/>
      )}

        <input 
        ref={email}
        type='text' placeholder="Email Address" 
        className="p-4 my-4 bg-gray-600 w-full"/>
        <input 
        ref={password}
        type='password' placeholder="Password" 
        className="p-4 my-4 bg-gray-600 w-full"/>
        
        <p className='text-red-500 font-bold text-lg py-2'>{errMessage}</p>
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> 

        {isSignInForm ? "Sign In" : "Sign Up"}
        
        </button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
        
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}
        
        </p>

      </form>


    </div>
  )
}

export default Login