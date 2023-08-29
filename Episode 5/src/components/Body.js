import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";

const Body = () =>{

const [listOfRestaurants, setListOfRestaurant] = useState(resList);

useEffect(()=>{
    console.log("useEffect Called");
    fetchData();
},[]);

const fetchData = async() => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8779714&lng=75.3488766&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    //optional chaining 
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);

};


console.log("Body Rendered");
//first body rendered will be printed, then after rendering of the body useEffect will be called


    return(
        <div className="body">
            <div className="filter">    
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating > 4.2);
                    setListOfRestaurant(filteredList);
                    console.log(listOfRestaurants);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant, index) => 
                    (<RestaurantCard key={index} resData={restaurant} />)
                    )}
            </div>

        </div>
    )
}

export default Body