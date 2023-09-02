import User from "./User";
import UserClass from "./UserClass"
const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
          
            <UserClass name={"Akshay Saini passing as a class based component"} location={"Delhi"}/>
            </div>
    );
};
//   <User name={"Akshay Saini passing as a functional prop"} /> this is functional component we got rid of 
//implementing in functional as well as class based components
//user is team member say, therefore creating a file 


export default About;