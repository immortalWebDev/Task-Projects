import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
    //Arrange
  render(<Greeting />);

  //Act..
  //Nothing for now

  //Assert
  const helloWorldElement = screen.getByText('Hello world!');
  expect(helloWorldElement).toBeInTheDocument();
});
