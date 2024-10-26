import { render, screen } from '@testing-library/react';
import App from './App';

test('renders witness', () => {
  render(<App />);
  const linkElement = screen.getByText(/Witness/i);
  expect(linkElement).toBeInTheDocument();
});
