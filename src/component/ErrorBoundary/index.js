import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className="error-boundary">{this.props.fallback}</div>;
    }
    // render children
    return this.props.children;
  }

  static propTypes = {
    fallback: PropTypes.node
  };

  static defaultProps = {
    fallback: "Some thing went wrong to render this page"
  };
}

export default ErrorBoundary;
