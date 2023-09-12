import { render, screen, waitFor } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


test("Should load heading contact us component",()=>{

    render(<Contact/>);
    //testing the component onto the JS DOM 

    const heading = screen.getByRole("heading");
    //heading inside the contactUs page 
    //screen is a method object whatever will render, we'll get the access through screen

    //assertion
    expect(heading).toBeInTheDocument();


    //But how can you test JSX?
    //How to enable JSX testing
    //Add @babel/preset-react

});

//Now I'm testing whether button is there or not?


test("Should load button inside contact us component",()=>{

    render(<Contact/>);
    //testing the component onto the JS DOM 

    const button = screen.getByRole("button");
    //button inside the contactUs page 
    //screen is a method object whatever will render, we'll get the access through screen

    //assertion
    expect(button).toBeInTheDocument();
    

    //But how can you test JSX?
    //How to enable JSX testing
    //Add @babel/preset-react

});

//another way 

test("Should load button inside contact us component",()=>{

    render(<Contact/>);
    //testing the component onto the JS DOM 

    const button = screen.getByText("Submit");
    //On my screen if there's submit text ill render, we'll get the access through screen

    //assertion
    expect(button).toBeInTheDocument();
    

});

test("Should load input name inside contact us component",()=>{

    render(<Contact/>);
    //testing the component onto the JS DOM 

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length);
    //will return 2 in the terminal itself 
    //assertion
    // expect(inputBoxes.length).toBe(2);
    
    expect(inputBoxes.length).not.toBe(4);
    
    //Query something and assert something

});


//How to group test cases?

describe("Contact Us Page Test Cases",()=>{

    beforeAll(()=>{
        console.log("Before All");
    })

    beforeEach(()=>{
        console.log("Before Each")
    })

    afterAll(()=>{
        console.log("After All")
    })

    afterEach(()=>{
        console.log("After Each is called")
    })

    //we can write all the above 4 test cases inside it 
    test("Should load heading contact us component",()=>{

        render(<Contact/>);
        //testing the component onto the JS DOM 
    
        const heading = screen.getByRole("heading");
        //heading inside the contactUs page 
        //screen is a method object whatever will render, we'll get the access through screen
    
        //assertion
        expect(heading).toBeInTheDocument();
    
    
        //But how can you test JSX?
        //How to enable JSX testing
        //Add @babel/preset-react
    
    });
    
    //Now I'm testing whether button is there or not?
    
    
    test("Should load button inside contact us component",()=>{
    
        render(<Contact/>);
        //testing the component onto the JS DOM 
    
        const button = screen.getByRole("button");
        //button inside the contactUs page 
        //screen is a method object whatever will render, we'll get the access through screen
    
        //assertion
        expect(button).toBeInTheDocument();
        
    
        //But how can you test JSX?
        //How to enable JSX testing
        //Add @babel/preset-react
    
    });
    
    //another way 
    
    test("Should load button inside contact us component",()=>{
    
        render(<Contact/>);
        //testing the component onto the JS DOM 
    
        const button = screen.getByText("Submit");
        //On my screen if there's submit text ill render, we'll get the access through screen
    
        //assertion
        expect(button).toBeInTheDocument();
        
    
    });
    
    test("Should load input name inside contact us component",()=>{
    
        render(<Contact/>);
        //testing the component onto the JS DOM 
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes.length);
        //will return 2 in the terminal itself 
        //assertion
        // expect(inputBoxes.length).toBe(2);
        
        expect(inputBoxes.length).not.toBe(4);
        
        //Query something and assert something
    
    });

})
//we can have a describe inside a describe as well 

//test can be written as it as well 
//test() can be replaced as it() as well 

//it() is just an allias for test 
//it("Should load contact us component") as a sentance

//hover to see the details 
