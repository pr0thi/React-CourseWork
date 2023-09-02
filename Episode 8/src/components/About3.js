import User from "./User";
import UserClass from "./UserClass"
import React from "react";
//converting functional component into a class based component 

//if you wish to 
//class About extends Component {

//}
//then replace import React from "react" with import {Component} from "react"


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")    
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                
                <UserClass name={"Akshay Saini passing as a class based component"} location={"Delhi"}/>
                <UserClass name={"Harsh Pruthi passing as a class based component"} location={"Delhi"}/>
                </div>
                
        );
    }
}
//   <User name={"Akshay Saini passing as a functional prop"} /> this is functional component we got rid of 
//implementing in functional as well as class based components
//user is team member say, therefore creating a file 


export default About;

/*

Parent Constructor 
Parent Render 

    - First Constructor 
    - First Render 

    - Second Constructor 
    - Second Render 

<DOM Updated in Batches> 

    -First ConstructordidMount 
    -Second ConstructordidMount 

Parent ConstructordidMount 

*/