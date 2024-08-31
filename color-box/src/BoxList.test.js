import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./BoxList";

expect("render without crashing", ()=>{
    render(
        <BoxList />
    ) 

})


expect("to have match snapshot", ()=>{
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})