//Tests for box component
import { render } from '@testing-library/react';
import Box from './Box'
import {removeBox} from './BoxList'

it('renders box without crashing', function() {
    render(
        <ul>
            <Box backgroundColor="blue" height="30px" width="30px" removeBox={removeBox} id={1}/>
        </ul>
    )
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <ul>
            <Box backgroundColor="blue" height="30px" width="30px" removeBox={removeBox} id={1} />
        </ul>
    )
    expect(asFragment).toMatchSnapshot();
});