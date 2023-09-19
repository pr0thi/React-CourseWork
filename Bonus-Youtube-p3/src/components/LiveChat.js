import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';




export const LiveChat = () => {

    const [liveMessage,setliveMessage] = useState("")

    const dispatch = useDispatch();

    //imp 
    const chatMessages = useSelector((store)=>store.chat.messages);



    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API Polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)+"🚀"
            }))
        },1500);

        //always clear the set Interval 
        
        return () => clearInterval(i);


    },[])




  return (
    <div>
    <div className='w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        <div>{chatMessages.map((c,i)=><ChatMessage
            index = {i}
            name = {c.name}
            message={c.message}/>
            )}
            </div>
        </div>
            
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault();
            console.log(liveMessage);
            //dispatch and action with user data 

            dispatch(
                addMessage({
                    name:"harsh",
                    message: liveMessage,
                })
            );
            setliveMessage(""); 
        }}>
            <input className='w-96' type='text' value={liveMessage} onChange={(e)=>setliveMessage(e.target.value)} />
                <button className='px-2 mx-2 bg-green-100'>Send</button>
            
        </form>
    </div>    
    
  )
}
