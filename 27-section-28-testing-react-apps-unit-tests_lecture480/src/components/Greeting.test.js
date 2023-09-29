import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders hello world as a test', () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});
