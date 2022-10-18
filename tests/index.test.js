import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../client/src/components/App.jsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});