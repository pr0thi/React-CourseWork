import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg box-border h-70 mt-auto max-w-full max-h-full bg-gray-100 hover:bg-gray-200">

        <img className="rounded-lg w-50 h-40" src={CDN_URL + resData.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg h-20 mt-auto max-w-full max-h-full">{resData.name}</h3>
            <h4></h4>
            <h4>{resData.areaName}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.locality}</h4>  
        </div>
    );
}

// thi

export default RestaurantCard;


