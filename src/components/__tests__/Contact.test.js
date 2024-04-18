import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

// we can group testcase using descibe
describe("contact us page test case",()=>{

    // beforeall is callback it log before test case.
    // there is another before each so it rill run after each test case
    
    test("should load contact us component",()=>{

        render(<Contact/>)
    const heading= screen.getByRole("heading");
    // assertion
    
    expect(heading).toBeInTheDocument();
    
    
    })
    
    //it is alias of test
    it("should load button us contact",()=>{
    
        render(<Contact/>)
        const nameInput = screen.getByPlaceholderText("Enter your name");
        const emailInput = screen.getByPlaceholderText("Enter your email address");
    
        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
    
    
    })
    
    
    
    test("no of impiut box",()=>{
    
        render(<Contact/>)
      
         const inputboxes=screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    
    
    })
    
})
