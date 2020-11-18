//Boxlist Component Test
import { render, fireEvent } from '@testing-library/react';
import BoxList, {addBox} from './Boxlist.js'

it("renders without crashing", function() {
    render(<BoxList />)
});

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />)
    expect(asFragment).toMatchSnapshot();
});

it("display a box when added", function() {
    //render Boxlist with a vbox
    render(<BoxList boxes={[{"bgColor": "blue", "height": "40", "width": "40", "id": 1}]}/>)

    //check box is in the doc
    expect(document.getElementById(1)).toBeInTheDocument()
});

it("should remove a box when X button is click", function() {
    //render Boxlist with a vbox
    const { debug } = render(<BoxList boxes={[{ "bgColor": "blue", "height": "40", "width": "40", "id": 1 }]} />)

    //check box is in the doc
    expect(document.getElementById(1)).toBeInTheDocument()

    const remove = document.getElementById("remove-1")
    fireEvent.click(remove);

    // //check box has been removed from the doc
    expect(document.getElementById(1)).not.toBeInTheDocument();
});

it("should add a box when form is submitted", function() {
    const { getByLabelText, queryByText, debug } = render(<BoxList />)

    expect(document.getElementById(1)).not.toBeInTheDocument()

    const bgColorInput = getByLabelText("Background Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const submitBtn = queryByText("Add a new box!");

    //fill out form
    fireEvent.change(bgColorInput, { target: { value: 'blue'}});
    fireEvent.change(heightInput, { target: { value: 40 } });
    fireEvent.change(widthInput, { target: { value: 40 } });
    fireEvent.click(submitBtn);

    //make sure box is displayed correctly
    expect(document.querySelector(".Box")).toBeInTheDocument();
    expect(Array.from(document.querySelectorAll("button")).find(el => el.textContent === "X")).toBeInTheDocument();
});
