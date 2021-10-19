import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import LocaleApp from "./LocaleApp";

const base = document.getElementsByTagName("base");
const baseUrl = !!base.length
  ? base[0].getAttribute("href") || undefined
  : undefined;

const TheApp = () => {
  useEffect(() => {
    console.log("mount", window.location.href);
  }, []);

  return (
    <HelmetProvider>
      <Router basename={baseUrl}>
        <LocaleApp>
          <App />
        </LocaleApp>
      </Router>
    </HelmetProvider>
  );
};

export default TheApp;
