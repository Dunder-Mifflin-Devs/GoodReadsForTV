
import '@testing-library/jest-dom'
import React from 'react';
import {render, screen} from '@testing-library/react';
import Error404 from './Error404';

test('Error404 renders successfully', () => {
  render(<Error404 />);

  const element = screen.getByText(/Page Not Found/i);

  expect(element).toBeInTheDocument();
});


