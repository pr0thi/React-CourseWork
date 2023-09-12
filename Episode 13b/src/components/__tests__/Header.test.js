import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// it("Should load Header Component with a login button",()=>{
//     render(<Header/>);

// })
//it'll fail yahan par coz Header uses Redux as well and tester doesn't know selector 
//it doesn't understand useSelector 

//Provide the store to our Header i.e. Adding Provider 

// it("Should load Header Component with a login button",()=>{
//     render(
//         <Provider store={appStore}>
//         <Header/>
//         </Provider>
// )
//     })

//It'll fail again because of Link Component 
//Is this Link React? No It's comning from react-router-dom
//Provide a router to this header

it("Should load Header Component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
)
    })

//Now we'll assert 

// it("Should load Header Component with a login button",()=>{
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//         <Header/>
//         </Provider>
//         </BrowserRouter>
// );

//         // const loginButton = screen.getByRole("button");
//         // const loginButton = screen.getByText("Login");

//         //expect(loginButton).toBeInTheDocument();
//         //include toBeInTheDocument library @testing-library/jestDOM

//     })

//     it("Should load Header Component with cart items 0",()=>{
//         render(
//             <BrowserRouter>
//             <Provider store={appStore}>
//             <Header/>
//             </Provider>
//             </BrowserRouter>
//     );
    
//             //const cartItems = screen.getByText("Cart-(0 items");

            
    
//             //expect(cartItems).toBeInTheDocument();
            
//         })
    
// it("Should check cart is there or not?",()=>{
//             render(
//                 <BrowserRouter>
//                 <Provider store={appStore}>
//                 <Header/>
//                 </Provider>
//                 </BrowserRouter>
//         );
        
//                 const cartItems = screen.getByText(/Cart/);
//                 //you can also use a regex inside it 
               
        
//                 expect(cartItems).toBeInTheDocument();
                
//             })

// it("Should check cart is there or not?",()=>{
//                 render(
//                     <BrowserRouter>
//                     <Provider store={appStore}>
//                     <Header/>
//                     </Provider>
//                     </BrowserRouter>
//             );
            
//                     const loginButton = screen.getByRole("button",{name:"Login"});
//                     //you can also use a regex inside it 
                   
//                     fireEvent.click(loginButton);

//                     const logoutButton = screen.getByRole("button",{name:"Logout"});

//                     expect(logoutButton).toBeInTheDocument();
                    
//                 })
        