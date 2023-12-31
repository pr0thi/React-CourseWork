import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();



  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ]);

  //authAPI
  //calling this api only once -> useEffect()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName, photoURL} = user;

        //if user is present, sign in case 
        //adding to our store 
        dispatch(
          addUser({uid:uid, 
            email:email, 
            displayName: displayName, 
            photoURL: photoURL}));
        //redirect to browse page 

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
       
      }
    });    
  },[])


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body