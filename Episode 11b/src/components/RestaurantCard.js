import { CDN_URL } from "../utils/constants";

//another restaurant card - enhanced restaurant card 



const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg box-border h-70 mt-auto max-w-full max-h-full bg-gray-100 hover:bg-gray-200">
        <div className="w-full h-40">
            <img className="rounded-lg w-full h-full object-center" src={CDN_URL + resData.cloudinaryImageId}></img>
            </div>    
            <h3 className="font-bold py-4 text-lg h-20 mt-auto max-w-full max-h-full">{resData.name}</h3>
            <h4></h4>
            <h4>{resData.areaName}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.locality}</h4>  
        </div>
    );
}

// input - restaurant card ---> Restaurant Card Promoted 
// withPromotedLabel is a higher order function which will add promoted label 
// function will return jsx 
export const withPromotedLabel = (RestaurantCard) => {
    return (props) =>  {
        return (<div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
        </div>);
    };

};


export default RestaurantCard;


