import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main elements', () => {
  render(<App />);
  const linkElement = screen.getByText(/Emily's Coding Journey/i);
  expect(linkElement).toBeInTheDocument();
});
