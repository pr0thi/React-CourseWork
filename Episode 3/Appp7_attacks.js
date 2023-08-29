
import React from "react";
import ReactDOM from "react-dom/client";

//Putting React Element inside React Element 

const elem = <span> React Element </span>

//compose react element inside react element 

const data = 1000;

//assume this data was coming from an API and what if it sends a malicious data?

//say eg : const data = api.getData();

//can we eject? suppose an attacker attempts to run some kind of js 
// this type of attack is called crosstag attacks 

//BUT JSX takes care of such malicious attacks, the {} kinda sanitises the data

const HeadingComponent = () => (
    <div id = "container">
        {data}  
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


