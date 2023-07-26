import React from "react";
//import ReactDOM from "react-dom"; //old

import ReactDOM from "react-dom/client";
//browser scripts cannot have import or export error 
//import is not a normal js this is a module 
//to fix this we write type="module" in script tag

const parent = React.createElement("div", {id:"parent"},[ //yahan par ek aur div jaise h1 ke ander heading
    React.createElement("div", {id:"child"},
        //React.createElement("h1", {}, "I'm an h1 tag") single child 
        [
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")
        ])  //for multiple children make an array
    ,
    React.createElement("div",{id: "child2"},[
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
]);

//this is UGLY

//THAT's why there's is JSX to fix this complicated structure

// React can be written without jsx as well 


// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz: "abc"}, 
//     "Hello World from React! "
// );
// console.log(heading); 

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(parent);

console.log(parent);