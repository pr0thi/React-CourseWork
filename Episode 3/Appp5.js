
import React from "react";
import ReactDOM from "react-dom/client";

//Putting React Element inside React Element 

const elem = <span> React Element </span>

//compose react element inside react element 

const title = (
    //Injecting inside tag only  
    
    <h1> {elem} Injection into Code </h1>
);


const HeadingComponent = () => (
    <div id = "container">
    {title}
    <h1>
        Namaste React 
    </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />); //push everything within the root of Div in the HTML File 


