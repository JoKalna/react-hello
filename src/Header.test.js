import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders withouth crashing', () => {
  render(<Header />);
  const textElement = screen.getByText('Hello World');
  expect(textElement).toBeInTheDocument();
});
