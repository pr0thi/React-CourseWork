import {fireEvent, render} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";


//trying to make a mock fetch function 
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
});


it("Should Search reslist with burger test input",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
    
});

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20);


const searchBtn = screen.getByRole("button", {name:"Search"});

const searchInput = screen.getByTestId
//data-testid="Search-input"
//another way to find

fireEvent.change(searchInput,{ target:{value:"burger"}});

fireEvent.click(searchBtn);

//screen should load 1 cards i.e. burger king 

//assert this

const cards = screen.getAllByTestId("rescard");

expect(cards.length).toBe(1)





expect(searchBtn).toBeInTheDocument()


//it'll fail coz inside body fetch is a superpower of JS 

//we have to write mock function for our fetch // building here only

it("Should Search reslist with burger test input",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
    
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("rescard");

    expect(cardsAfterFilter.length).toBe(13)




});

