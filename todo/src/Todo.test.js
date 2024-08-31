import { render } from "@testing-library/react";
import Todo from "./Todo";
expect("to render without crashing", ()=>{
    render(<Todo />)
})

expect("to match snapshot", ()=>{
    const {asFragment} = render(<Todo />)
    expect(asFragment).toMatchSnapshot()
})