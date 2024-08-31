import { render } from "@testing-library/react";
import TodoList from "./Todo";
expect("to render without crashing", ()=>{
    render(<TodoList />)
})

expect("to match snapshot", ()=>{
    const {asFragment} = render(<TodoList />)
    expect(asFragment).toMatchSnapshot()
})