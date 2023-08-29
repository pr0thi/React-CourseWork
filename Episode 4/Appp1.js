//export{}//to fix redeclare block scoped error
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Top Level App Layout Component 
 * 
 * Header Component
 *  - Logo 
 *  - Nav Items 
 *  
 * Body 
 *  - Search 
 *  - Restaurant Container
 *      - Restaurant Card 
 *          -img
 *          - name of restaurant, star rating, Cuisines, delivery time  
 * Footer Component
 *  - Copyright 
 *  - Links 
 *  - Address 
 *  - Contact 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const styleCard = {
    backgroundColor:"#f0f0f0"
}


const RestaurantCard = () => {
    return(
        <div className="res-card" style={styleCard}>

        <img className="resLogo" src="https://tinyurl.com/bdf9yey3"></img>
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian </h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>  
        </div>
    );
}


const Body = () =>{
    return(
        <div className="body">
            <div className="search">    
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
