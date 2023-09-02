import { useState } from "react";

const User = ({name}) =>{
    //State Variable 
    const[count] = useState(0);
    const[count2] = useState(1);
    
    return (<div className="user-card">
        <h1>count={count}</h1>
        <h1>count={count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
};

//functional component returning jsx, jsx say returns a card 

export default User;