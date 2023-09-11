import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {
    //takes resID and extract restaurant information 

    //local variable to store data 
    const [resInfo,setResInfo] = useState(null);

    //fetch data using UseHook only 

    //2 args : callback fn, dependency array    
    useEffect(()=>{
        fetchMenu();
    },[]);//fetch data only once tabhi []
    //empty array so that you don't call it every time
    
    const fetchMenu = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId
        );
        const json = await data.json();

        setResInfo(json.data);

    };
    return resInfo; 
};

export default useRestaurantMenu;