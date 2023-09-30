import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting Component', () => {

  test('renders hello world as a test', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

})
