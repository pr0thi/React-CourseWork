//export{}//to fix redeclare block scoped error
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery.js"))

const AppLayout = () => {

    //authentication 
    const[userName, setUserName] = useState();
    
    useEffect(()=>{
        const data = {
            name: "Harsh Pruthi",
        };
        setUserName(data.name);
    },[])

    
    //wherever you want store wrap it inside 
    
    return (
        <Provider store = {appStore}> 
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>      
         <div className="app">
            <Header />
            <Outlet />
            
        </div>
        </UserContext.Provider>
        </Provider>
    );
};
// Outlet Would be filled acccording to path 

const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
        element:<About/>,
    },{
        path:"/contact",
    element:<Contact/>,
    },
    {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
    },
    {
        path:"/cart",
        element:<Cart/>,
    }

    ],
    errorElement:<Error/>,

},
   
])

//errorElement for error 404 



const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
