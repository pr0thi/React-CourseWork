import React from "react";
import ReactDOM from "react-dom/client";

//Rendering Title inside Heading Component inside container

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

//Injecting into Heading Component using the same angular bracks
//Babel is transpiling 

//THIS IS CALLED AS COMPONENT COMPOSITION 

const HeadingComponent = () => {
    <div id="container">
        <Title />     
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
}; 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)




