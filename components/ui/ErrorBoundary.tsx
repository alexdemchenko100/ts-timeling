import { Component, ErrorInfo } from "react";
import { post } from "../../utils/fetch";

type State = {
  hasError: boolean;
};

type Props = {};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const data = {
      name: error.toString() + " " + navigator.userAgent,
      content: errorInfo.componentStack,
    };

    post("/log/error", data, { auth: false });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
