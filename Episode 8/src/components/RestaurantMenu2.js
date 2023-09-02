import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//named import

const RestaurantMenu = () =>{

    const[resInfo, setResInfo]=useState(null);

    //2 args : callback fn, dependency array    
    useEffect(()=>{
        fetchMenu();
    },[]);
    //empty array so that you don't call it every time
    
    const fetchMenu = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=708880"
        );
        const json = await data.json();
    
        console.log(json);
        setResInfo(json.data);

    };
    
    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item=> <li>
                    {item.card.info.name} {"₹-"} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;


{itemCards.map(item=> <li>
    {item.card.info.name} {"₹"} {item.card.info.price/100 || item.card.info.defaultPrice/100}
    </li>)}

    {itemCards.map(item=> <li>
        {item.card.info.name} {"₹"} {item.card.info.price/100 || item.card.info.defaultPrice/100}
        </li>)}

       