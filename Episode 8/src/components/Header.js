import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    // let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">
                    Home
                    </Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>
                    <Link to="/contact">
                    ContactUs
                    </Link>
                    </li>
                    <li><Link to="/">Cart</Link></li>
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
 