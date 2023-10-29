import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import TvShows from './TvShows'

test('TvShows renders successfully', () => {
  render(<TvShows />);

  const element = screen.getByText(/TV Shows/i);

  expect(element).toBeInTheDocument();
});