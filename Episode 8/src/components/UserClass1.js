import React from "react";

//creating User.js User component using Class Based Component 

//Class based component is basically a class in JS 

//this becomes a class 

class UserClass extends React.Component{
    //render method - returning a piece of JSX and this JSX will be converted to HTML and displayed to web page

    //React.Component - class given to us by react and userClass is inhereting properties from it 
    //that's why import React from "react"

    render(){
        return (<div className="user-card">
        <h2>Name: Harsh</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
    }
}

export default UserClass;
//no difference in importing exporting 