
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
//named import

const RestaurantMenu = () =>{
 
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo==null) return <Shimmer/>

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
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

