
import '@testing-library/jest-dom'
import React from 'react';
import {render, screen} from '@testing-library/react';
import AboutUs from './about';

test('about.jsx renders successfully', () => {
  render(<AboutUs />);

  const element = screen.getByText(/Who are we?/i);

  expect(element).toBeInTheDocument();
});


