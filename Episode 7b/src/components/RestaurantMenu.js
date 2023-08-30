import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//named import

const RestaurantMenu = () =>{

    const[resInfo, setResInfo]=useState(null);
    
    const {resId} = useParams();

    //2 args : callback fn, dependency array    
    useEffect(()=>{
        fetchMenu();
    },[]);
    //empty array so that you don't call it every time
    
    const fetchMenu = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId
        );
        const json = await data.json();
    
        console.log(json);
        setResInfo(json.data);

    };
    
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return resInfo==null?(
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
            {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item=> <li>
                {item.card.info.name} {"₹"} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                 <p>{item.card.info.description}</p>
                </li>)}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;

