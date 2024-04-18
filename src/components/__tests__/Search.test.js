const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATAs from  '../mocks/mockRestListData.json';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATAs);
    }
  });
});

test("should render the body component with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter><Body /></BrowserRouter>
    );
  });

  const cardsbeforesearch= screen.getAllByTestId('rescard');
  expect(cardsbeforesearch.length).toBe(20);
//   const searchbtn = screen.getByRole("button", { name: 'Search' });
//   const searchInput = screen.getByTestId("searchinput");
//   fireEvent.change(searchInput, { target: { value: "burger" } });
//   fireEvent.click(searchbtn);

//   // Asserting the number of cards rendered based on mock data
//   const cards = screen.getAllByTestId("rescard");
//   expect(cards.length).toBe(1);
});




test("it shouldfilter top rest restaunr", async () => {
    await act(async () => {
      render(
        <BrowserRouter><Body /></BrowserRouter>
      );
    });
  
    const cardsbeforfiltewr= screen.getAllByTestId('rescard');
    expect(cardsbeforfiltewr.length).toBe(20);
    const topratedbn=screen.getByRole("button",{name:"Top Rated Restaurant"});
    fireEvent.click(topratedbn);
  const cardsafterfilter = screen.getAllByTestId("rescard");
    expect(cardsafterfilter.length).toBe(7);
  });
  