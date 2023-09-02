import React from "react";

//in order 

class UserClass extends React.Component{

    //constructor will receive the props 
    constructor(props){
        //use the keyword super to receive the props 
        super(props);
        console.log(props);
        //returns the props object 
        //how to use?
    }

    //this.props.name is destructured with const
    render(){

        const {name,location} = this.props;

        return (<div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
    }
}

export default UserClass;
//no difference in importing exporting 