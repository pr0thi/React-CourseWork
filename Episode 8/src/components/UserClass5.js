import React from "react";

//in order 

class UserClass extends React.Component{

    //constructor will receive the props 
    constructor(props){
        //use the keyword super to receive the props 
        super(props);

        this.state={
            count:0,
        };
        console.log("Child Constructor")
        //returns the props object 
        //how to use?
    }
    
    componentDidMount(){
        console.log("First Constructor, then Render, then Component Did Mount")
    }

    //this.props.name is destructured with const
    render(){

        const {name,location} = this.props;

        const {count} = this.state;
        console.log("Child Render");
        return (<div className="user-card">
        <h1>Count : {count}</h1>
       <button onClick={()=>{
            // NEVER UPDATE State vars DIRECTLY
            //this.state.count = this.state.count+1;
            //Access to an important function this.setState
            this.setState({
                count : this.state.count+1,
                // count2 : this.state.count2 + 1,
                //club all state variables into one 
            })
       }}>Count Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
    }
}

export default UserClass;
//no difference in importing exporting 