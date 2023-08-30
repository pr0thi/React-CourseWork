import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {

    // let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li><a href="/about">About Us</a></li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact=="Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login");    
                    }}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;
 