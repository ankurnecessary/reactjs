import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting Component', () => {

  test('renders "hello world" as a test', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    // Nothing

    // Assert
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "changed" if the button was clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const changedText = screen.getByText('Changed');
    expect(changedText).toBeInTheDocument();

  });

  test('doesn\'t render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByText('Change Text');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  })

})
