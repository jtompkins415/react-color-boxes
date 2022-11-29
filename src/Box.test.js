import { render } from '@testing-library/react';
import Box from "./Box"

it('renders w/o crashing', () => {
    render(<Box color='Red' width={3} height={5} />)
})

it('matches snapshot', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
})

