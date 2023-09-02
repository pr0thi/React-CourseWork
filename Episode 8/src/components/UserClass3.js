import React from "react";

//in order 

class UserClass extends React.Component{

    //constructor will receive the props 
    constructor(props){
        //use the keyword super to receive the props 
        super(props);

        this.state={
            count:0,
            count2:2,
        };
        console.log(props);
        //returns the props object 
        //how to use?
    }

    //this.props.name is destructured with const
    render(){

        const {name,location} = this.props;

        const {count} = this.state;
        const {count2} = this.state;

        return (<div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count 2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
    }
}

export default UserClass;
//no difference in importing exporting 