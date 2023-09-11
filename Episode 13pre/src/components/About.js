import User from "./User";
import UserClass from "./UserClass"
import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                LoggedIn User 
                <UserContext.Consumer>
                {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                
                <UserClass name={"Akshay Saini passing as a class based component"} location={"Delhi"}/>
                </div>
                
        );
    }
}


export default About;
