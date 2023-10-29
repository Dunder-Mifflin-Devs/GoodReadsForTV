import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Dashboard from './dashboard';
import Feature from '../components/common/Feature'

test('Dashboard renders successfully', () => {
  render(<Dashboard />);

  const element = screen.getByText(/TV Show 1/i);

  expect(element).toBeInTheDocument();
});

// test('Dashboard renders Feature', () => {
//   render(<Dashboard />);

//   const element = screen.getByText(Feature);

//   expect(element).toBeInTheDocument();
// });
