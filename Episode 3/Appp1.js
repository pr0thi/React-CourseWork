import React from "react";
import ReactDOM from "react-dom/client";

//starting from scratch 

//React Element?

const heading = React.createElement("h1", {id:"heading"}, "Namaste React")
//not an HTML Element 

//react.createElement creates am Object when we render 
//this on the DOM it becomes HTML Element 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading); //push everything within the root of Div in the HTML File 


