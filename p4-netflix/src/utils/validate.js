
export const checkValidData = (email,password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    //return true or false
    //.test() is a method as end 
    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid";

    if(!isPasswordValid) return "Password is not valid";

    return null; //if everything is valid

    //this is a sample commit 
    


};