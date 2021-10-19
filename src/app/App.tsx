import Footer from "../components/Footer";
import Consent from "../components/Consent";
import Routes from "../routes/Routes";

import "./App.scss";

const App = () => {
  return (
    <>
      <Consent />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
