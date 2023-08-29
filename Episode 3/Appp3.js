
import React from "react";
import ReactDOM from "react-dom/client";

//React Element

//using heading simply instead of JSXheading
const heading = (   
    <h1 id="heading" className="head">
    Namsate React using JSX
    </h1>
);
//heading variable has object within it  

//React Component : everything is a component in React 
//header, footer, cards etc. 

//Class Based Components - OLD
//Function Based Components - NEW 

//React Functional Component 
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
};

// const fn = () => {
//     return true;
// }

const fn = () => true; //for single line code 

//Similarily HeadingComponent can be condensed as well 

// We can neglect return when we just have a single expression approach
//Without any logic
// const HeadingComponent2 = () => {
//     <h1 className="heading">Namaste React Functional Component</h1>
// }; 

const HeadingComponent2 = () => {
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
}; //It can return multiple statements as well 
//Nested also 



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading); 

//How to render HeadingComponent?
root.render(<HeadingComponent />)
