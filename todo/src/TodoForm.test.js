import { render } from "@testing-library/react";
import TodoForm from "./NewTodoForm";
expect("to render without crashing", ()=>{
    render(<TodoForm />)
})

expect("to match snapshot", ()=>{
    const {asFragment} = render(<TodoForm />)
    expect(asFragment).toMatchSnapshot()
})