import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestautantMenu from "../RestaurantMenu"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA_NAME),
    
    })
})




it("should load restaurant menu component", async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Provider store={appStore}>

            <Header/>
            <RestautantMenu/>
            </Provider>
            
            </BrowserRouter>

            )
    )
    const accordianHeader = screen.getByText("Burgers (13)")

    fireEvent.click(accordianHeader);

    //add test id in the Item List 

    expect(screen.getAllByTestId("foodItems").length).toBe(13);

        

    //finding add button

    const addBtns = screen.getAllByRole("button",{name:"Add +"});

    console.log(addBtns.length);

    fireEvent.click(addBtns[0]);


    expect(screen.getAllByText("Cart - (1 items)").toBeInTheDocument());





})

