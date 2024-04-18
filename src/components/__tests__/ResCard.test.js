import { render,screen } from "@testing-library/react"
import RestaurentCard, { withPromotedLabel } from "../RestaurentCard"
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom'
it("should render restaurentcard component with props dats",()=>{

    render(<RestaurentCard resObj={MOCK_DATA}/>)

    const name= screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
})
const MockComponent = ({ resObj }) => (
    <div>
      {/* Simulate rendering the restaurant name */}
      <div data-testid="restaurant-name">{resObj.info.name}</div>
    </div>
  );
  
  // Wrap the MockComponent with the withPromotedLabel HOC
  const ComponentWithPromotedLabel = withPromotedLabel(MockComponent);
  
  // Write your test case for HOC
  it("should render component with promoted label", () => {
    // Render the component with the HOC and pass the mock data
    render(<ComponentWithPromotedLabel resObj={MOCK_DATA} />);
    
    // Assert that the "Promoted" label is present in the rendered component
    const promotedLabelElement = screen.getByText("Promoted");
    expect(promotedLabelElement).toBeInTheDocument();
    
    // Assert that the restaurant name is rendered (to ensure the component is not overwritten)
    const restaurantNameElement = screen.getByTestId("restaurant-name");
    expect(restaurantNameElement.textContent).toBe(MOCK_DATA.info.name);
  });