import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//named import

const RestaurantMenu = () =>{

    //2 args : callback fn, dependency array    
    useEffect(()=>{
        fetchMenu();
    },[]);
    //empty array so that you don't call it every time
    
    const fetchMenu = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        

    };
    
    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;

