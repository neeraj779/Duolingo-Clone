import { Component, ErrorInfo } from "react";
import ErrorMessage from "./ErrorMessage"; 
import { ErrorBoundaryProps, ErrorBoundaryState } from "../common/types/ErrorBoundary.types";



class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
