// this is our react code 

// now what is the missing {}?
// {} is used to give attributes to our class

// this is an object
const heading = React.createElement(
    "h1", 
    {id:"heading", xyz: "abc"}, //for styling or attributes
    "Hello World from React! "
);
// comes from the first library, core react thing for creating library
console.log(heading); // this is an object at the end of the day, react element

// root where all react code will run 
const root = ReactDOM.createRoot(document.getElementById("root")); 
//second root used here is the div root mentioned
// creating root for react library to render 

root.render(heading);   //converting heading to h1 tag 