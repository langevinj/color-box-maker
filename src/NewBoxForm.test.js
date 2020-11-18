import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm'
import { addBox } from './BoxList'


it("renders without crashing", function() {
    render(<NewBoxForm addBox={addBox} />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm addBox={addBox} />)
    expect(asFragment).toMatchSnapshot();
})
