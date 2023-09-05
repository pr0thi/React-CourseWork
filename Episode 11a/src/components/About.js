import User from "./User";
import UserClass from "./UserClass"
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                
                <UserClass name={"Akshay Saini passing as a class based component"} location={"Delhi"}/>
                </div>
                
        );
    }
}


export default About;
