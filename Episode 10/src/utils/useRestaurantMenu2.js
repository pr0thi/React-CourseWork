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