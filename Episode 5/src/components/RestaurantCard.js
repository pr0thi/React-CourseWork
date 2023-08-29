import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="res-card">

        <img className="resLogo" src={CDN_URL + resData.cloudinaryImageId}></img>
            <h3>{resData.name}</h3>
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


