// how to make complex structures then like we used to make in HTML?


// //
//     <div id="Parent">
//         <div id="child">
//             <h1>I'm H1 tag</h1>
//         </div>
//     </div>


// const parent = React.createElement("div", {id:"parent"}, //yahan par ek aur div jaise h1 ke ander heading
//     React.createElement("div", {id:"child"},
//         //React.createElement("h1", {}, "I'm an h1 tag") single child 
//         [
//         React.createElement("h1", {}, "I'm an h1 tag"), 
//         React.createElement("h2", {}, "I'm an h2 tag")
//         ]  //for multiple children make an array
        
//     )
// );

//more complex

// //
//     <div id="Parent">
//         <div id="child">
//             <h1>I'm H1 tag</h1>
//             <h2> I'm H2 tag</h2>
//         </div>
//         <div id="child2">
//             <h1>I'm H1 tag</h1>
//             <h2> I'm H2 tag</h2>
//         </div>
//     </div>


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