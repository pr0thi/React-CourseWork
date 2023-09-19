import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import YOUTUBE_VIDEOS_API from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

//Header 
const Head = () => {
    console.log(YOUTUBE_VIDEOS_API);
    const[searchQuery,setSearchQuery] = useState("");

    const[suggestions,setSuggestions] = useState([]);

    const[showSuggestions,setShowSuggestions] = useState(false);
    //console.log(searchQuery);
    //iphone type krne par 
    const searchCache = useSelector((store)=>store.search);

    //making api call everytime, searchQueryChanges 
    //making an api call everytime whenever difference is <200ms 
    useEffect(()=>{
        //API Call 
        console.log(searchQuery);

        //make an api call after every key press 
        //if difference is less than 200ms, decline 

        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
                //it'll show the data from the map DS defined in our Cache 
                //as compared to making an API CAll 
                
            }else{
                //api call 
                getSearchSuggestions();
            }

        },200);

        //access to cache 
        //subscribe to it 

        

        /**
         * searchCache ={
         * {
         * "Iphone : [iphone, iphone"]
         * searchQuery = iphone
         *}
         * 
         */


        //if present in my cache directly set suggestions or directly set data from cache 
       


        //useeffect return will be called 
        return () =>{
            clearTimeout(timer);
        }

    },[searchQuery]);


    const getSearchSuggestions = async()=>{
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        //making api call function and updating Cache 
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));

    }


    const dispatch = useDispatch();
    //dispatching action of clicking 
    //dispatch is a hook coming from react-redux library 

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
        //no need to pass as it does not takes anything 
        //doesn't have any payload 

        //now according to the state I've to make changes to UI 
        
    };



  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
        <img alt = "menu" 
        className="h-[45px] my-[-5px] cursor-pointer"
        onClick={()=>toggleMenuHandler()}
        src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png' />
        <a href='/'>
        <img alt ="youtube-logo"
        className='h-[80px] mx-2 my-[-20px]'
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/>
        </a>
        </div>
    <div className='col-span-10 px-10'>
        
    <div>
    <input type="text" 
        value ={searchQuery}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        onChange = {(e)=>setSearchQuery(e.target.value)}
        className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'/>
        <button 
        className='border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100 '>
        🔎</button>
        </div>
        {showSuggestions&&(<div className='absolute bg-white py-2 px-5 w-[28.5rem] shadow-lg rounded-lg border border-gray-100'>
        <ul >
            {suggestions.map(s=> <li key={s} className='py-2 shadow-sm px-3 hover:bg-gray-100 cursor-pointer'>🔎 {s}</li>)}
           
            
        </ul>
        </div>)}
    </div>

    <div className='col-span-1'>
        <img alt="user" 
        className='h-10'
        src="https://static.vecteezy.com/system/resources/previews/007/296/444/non_2x/monochrome-icon-people-icon-design-user-icon-in-flat-style-vector.jpg"/>
        
    </div>



    </div>
  )
};

export default Head