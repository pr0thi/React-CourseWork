
import React from "react";
import ReactDOM from "react-dom/client";

//Putting React Element inside React Element 

const elem = <span> React Element </span>

//compose react element inside react element 


const HeadingComponent = () => (
    <div id = "container">
    <h1>
        Namaste React 
    </h1>
    </div>
);

const title = (
    //Injecting inside tag only  
    
    <h1> {elem} Injection into Code 
        <HeadingComponent />
    </h1>
);
//Putting Div inside h1 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(title); //push everything within the root of Div in the HTML File 


