import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

expect("render without crashing", ()=>{
    render(
        <NewBoxForm />
    ) 

})

expect("to have match snapshot", ()=>{
    const {asFragment} = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})