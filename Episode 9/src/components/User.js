import { useState, useEffect } from "react";

const User = ({name}) =>{
   
    const[count] = useState(0);
    const[count2] = useState(1);
    

    useEffect(()=>{
        setInterval(()=>{
            console.log("Timer")
        },1000)
    },[count])
   
    return (<div className="user-card">
        <h1>count={count}</h1>
        <h1>count={count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
};

export default User;