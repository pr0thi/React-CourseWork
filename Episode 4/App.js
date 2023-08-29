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

const resList = [
{
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Express Avenue Food Court",
    "areaName": "Thousand Lights",
    "costForTwo": "40000",
    "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"],
    "avgRating": 4.8
},
{
    "id": "11479",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "Express Avenue",
                      "areaName": "Thousand Lights",
                      "costForTwo": "35000",
                      "cuisines": [
                        "Burgers",
                        "American"],
                        "avgRating": 4.1
},
{
    "id": "391590",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "qglx69unf6wxjzdmrbmm",
    "locality": "Sowcarpet",
    "areaName": "George Town",
    "costForTwo": "20000",
    "cuisines": [
      "Waffle",
      "Desserts",
      "Ice Cream",
      "Beverages"
    ],
    "avgRating": 4.4
},
{
    "id": "448584",
    "name": "EatFit",
    "cloudinaryImageId": "ee4f041cd8611dccc19f4267783ab5ea",
    "locality": "Manickam road",
    "areaName": "Aminjikarai",
    "costForTwo": "27000",
    "cuisines": [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani"
    ],
    "avgRating": 4.3
},{

    "id": "36018",
    "name": "Zaitoon",
    "cloudinaryImageId": "ac1staxtetolkvynv2ot",
    "locality": "Nungambakkam",
    "areaName": "Thousand Lights",
    "costForTwo": "50000",
    "cuisines": [
      "Biryani",
      "Juices",
      "North Indian",
      "Chinese",
      "Arabian",
      "Mughlai",
      "Kebabs"
    ],
    "avgRating": 4.3
}
];

const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="res-card" style={styleCard}>

        <img className="resLogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.areaName}</h4>
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
                {
                    resList.map((restaurant, index) => 
                    (<RestaurantCard key={index} resData={restaurant} />)
                    )}
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
