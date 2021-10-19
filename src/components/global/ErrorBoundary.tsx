import React, { ErrorInfo } from "react";
import { post } from "../../lib/fetch";
import StatusRoute from "../../routes/StatusRoute";

type State = {
  hasError: boolean;
};

type Props = {
  withIntl?: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
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
      name:
        error.toString() +
        " at " +
        window.location.href +
        " " +
        navigator.userAgent,
      content: errorInfo.componentStack,
    };

    post("/log/error", data, { auth: false });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <StatusRoute type={500} withIntl={this.props.withIntl} />;
    }

    return this.props.children;
  }
}
