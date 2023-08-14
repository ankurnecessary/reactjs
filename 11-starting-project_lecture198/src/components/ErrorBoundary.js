import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    console.log(error) // we could log error or send it to the server for analytics
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return (
      this.props.children
    );
  }
}

export default ErrorBoundary;
