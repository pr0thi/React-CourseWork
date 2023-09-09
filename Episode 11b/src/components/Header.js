import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    // let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    const onlineStatus = useOnlineStatus();

    //const data = useContext(UserContext);
   
    const {loggedInUser} = useContext(UserContext);
    //useContext to use it from anywhere 

    // console.log(data);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
            <div className="logo-container">
                <Link to="/"><img className="w-56" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/">
                    Home
                    </Link>
                    </li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4">
                    <Link to="/contact">
                    ContactUs
                    </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4"><Link to="/">Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact=="Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login");    
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul> 
            </div>

        </div>
    );
};

export default Header;
 