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

const resList = [{
    name :"Meghna Foods", 
    cuisine :["Biryani" , "North Indian", "Asian"],
    avgRating : 4.3,
    costForTwo : 20000,
    pic: "56c9ab92bd79745fd152a30fa2525426"

},
{
    name :"KFC Foods", 
    cuisine :["Biryani" , "North Indian", "Asian"],
    avgRating : 4.3,
    costForTwo : 20000,
    pic: "56c9ab92bd79745fd152a30fa2525426"
}


];

const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="res-card" style={styleCard}>

        <img className="resLogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.pic}></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine.join(" , ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>₹{resData.costForTwo / 100} for 2</h4>
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
                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
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
