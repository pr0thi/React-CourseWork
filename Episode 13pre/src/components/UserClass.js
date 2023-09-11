import React from "react";

//API CALL 
class UserClass extends React.Component{

    //constructor will receive the props 
    constructor(props){
        super(props);

        //updating json data onto the webpage through local state vars 
        this.state ={
            userInfo:{
                name: "Dummy", 
                location: "Default",
          
            },
        };
        
        
    }
    //converting componentDidMount() to async function
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/pr0thi");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log("Component did Update");

    }

    componentWillUnmount(){
        console.log("Component did Unmount");
        //when you click on Contact from About 
    }

    //this.props.name is destructured with const
    render(){

        const {name, avatar_url} = this.state.userInfo;

        //debugger; to test ms rendering 

       console.log("Child Render");
        return (<div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
       
        <h2>Name: {name}</h2>
        <h3>Location: India</h3>
        <img src={avatar_url} />
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
    }
}

export default UserClass;
//no difference in importing exporting 