import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App', () => {
  render(<App />)
});

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})