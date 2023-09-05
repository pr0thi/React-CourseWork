import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

const Body = () =>{

const [listOfRestaurants, setListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const[searchText,setSearchText]=useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

//online Status 
const onlineStatus = useOnlineStatus();

if(onlineStatus==false) return <h1>Looks like you're offline</h1>


return listOfRestaurants.length==0?(
<Shimmer/>
):(
        <div className="body">
            
            <div className="filter flex">    
            <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
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
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.avgRating > 4.2);
                //setListOfRestaurant(filteredList);
                setFilteredRestaurant(filteredList);
                console.log(listOfRestaurants);
            }}
            >Top Rated Restaurant</button>
            
            </div>
               
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant, index) => 
                    (<Link  key={index} 
                        to={"/restaurants/"+restaurant.id}>
                        {/**if the restaurant is promoted then add a promoted label */
                        restaurant.promoted?(<RestaurantCardPromoted resData={restaurant}/>):( <RestaurantCard resData={restaurant} />)
                    
                    }
                       </Link>)
                    )}
            </div>

        </div>
    )
}

export default Body