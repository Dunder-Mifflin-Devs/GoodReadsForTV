import {render, screen} from '@testing-library/react';
import ExampleTest from './ExampleTest';

test('ExampleTest renders successfully', () => {
  render(<ExampleTest />);

  const element = screen.getByText(/hello world/i);

  expect(element).toBeInTheDocument();
});
