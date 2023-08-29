import React from "react";
import ReactDOM from "react-dom/client";

//starting from scratch 

//React Element?

//When react was build, it was the core fundamental 

//React element created using Core of React 
const heading = React.createElement(
    "h1", 
    {id:"heading"},
     "Namaste React"
);
//not an HTML Element 

//react.createElement creates am Object when we render 
//this on the DOM it becomes HTML Element 


// JSX Method
//React element createed using JSX 
//const jsxHeading = <h1 id="heading">Namsate React using JSX</h1>; 

//adding class 
//const jsxHeading = <h1 id="heading" className="head">Namsate React using JSX</h1>; 

//for single line it was fine but for multiple lines we wrap it so that babel understands
const jsxHeading = (
    <h1 id="heading" className="head">
    Namsate React using JSX
    </h1>
);
    


//JSX is just a syntax
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading); //push everything within the root of Div in the HTML File 

root.render(jsxHeading); //rendering through JSX heading

//Therefore from this point onwards, we won't use React.CreateElement

//Is JSX a valid JS? => it's not pure JS
// JS is a code that JS engine in our browser understand it 

//JS engine only understands ES6 (EcmaScript)

// Then how is it working? BOOM PARCEL comes in into the picture 
// Parcel Transpiles the code 
// Parcel is also dependent on other package dependencies -> Babel for conversion
// Babel is a JS compiler 