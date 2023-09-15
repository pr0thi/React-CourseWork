import React from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

//Header 

const Head = () => {

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
        <input type="text" className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
        <button 
        className='border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100 '>
        🔎</button>
    
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