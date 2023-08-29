import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">  
        Namaste React using JSX
    </h1>
);

// <title></title> This is same as // {title}
// {Title()} is also same as // {title}
// <Title /> is also same as // {title}

const HeadingComponent = () => (
    <div id="Container">
        <Title />
        
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

//JSX is making our app readable 