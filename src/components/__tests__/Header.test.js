import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders withouth crashing', () => {
  render(<Header />);
  const textElement = screen.getByText('This is header');
  expect(textElement).toBeInTheDocument();
});
