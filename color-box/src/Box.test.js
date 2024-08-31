import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";


expect("render without crashing", ()=>{
    render(
        <Box />
    ) 

})

expect("to have match snapshot", ()=>{
    const {asFragment} = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
})