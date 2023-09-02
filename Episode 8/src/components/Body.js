import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{

const [listOfRestaurants, setListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const[searchText,setSearchText]=useState("");

console.log("Body rendered");
//on every keypress it will rerender 

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
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);
};


console.log("Body Rendered");
//first body rendered will be printed, then after rendering of the body useEffect will be called

//Conditional Rendering 
// if(listOfRestaurants.length==0){
//     return <Shimmer/>
// }
//clubbing this as a ternary operator under return 

return listOfRestaurants.length==0?(
<Shimmer/>
):(
        <div className="body">
            
            <div className="filter">    
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    //filter the restaurant cards and filter the UI
                    //search text 
                    console.log(searchText);
                    const filteredRestaurant = 
                    // listOfRestaurants.filter((resList)=>resList.name == searchText);
                    listOfRestaurants.filter((resList)=>resList.name.toLowerCase().includes(searchText.toLowerCase()));
                        //resList remains the same under listOfRestaurants
                

                    setFilteredRestaurant(filteredRestaurant);
                    //making a copy into Filtered Restaurant to fix the bug 

                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating > 4.2);
                    //setListOfRestaurant(filteredList);
                    setFilteredRestaurant(filteredList);
                    console.log(listOfRestaurants);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant, index) => 
                    (<Link  key={index} 
                        to={"/restaurants/"+restaurant.id}><RestaurantCard resData={restaurant} /></Link>)
                    )}
            </div>

        </div>
    )
}

export default Body