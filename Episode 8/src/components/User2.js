// const User = ({props}) =>{
//     return (<div className="user-card">
//         <h2>Name: {props.name}</h2>
//         <h3>Location: Delhi</h3>
//         <h4>Contact: @harshpruthi_</h4>
//     </div>
//     );
// };

//another way 

const User = ({name}) =>{
    //name is a parameter 
    return (<div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @harshpruthi_</h4>
    </div>
    );
};

//functional component returning jsx, jsx say returns a card 

export default User;