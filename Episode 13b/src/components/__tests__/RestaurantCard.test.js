import {render,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data",()=>{
    //passing mock data inside the card component
    render(
        <RestaurantCard resData = {MOCK_DATA}/>
    );

    //how to check that card was successfully rendered or not?
    const name = screen.getByText("Subway");
    
    expect(name).toBeInTheDocument();
})