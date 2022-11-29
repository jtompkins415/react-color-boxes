import { render, fireEvent } from '@testing-library/react';
import BoxList from "./BoxList"

it('renders w/o crashing', () => {
    render(<BoxList />)
})

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it("should add new box w/ remove box", function () {
    const { queryByText, getByLabelText, getByText } = render(<BoxList />);
    const input = getByLabelText("Color");
    const btn = queryByText("Add Box");
    expect(queryByText('Red')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Red' } });
    fireEvent.click(btn);
    expect(getByText('X')).toBeInTheDocument();
  })