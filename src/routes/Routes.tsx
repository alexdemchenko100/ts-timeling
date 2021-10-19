import { Route, Switch, useLocation } from "react-router-dom";

import { languages } from "../lib/locale";

import NotFound from "./NotFound";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Cookies from "./Cookies";
import Home from "./Home";

const languageRegex = `(${languages.join("|")})`;

const Routes = (props: any) => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={`/:locale${languageRegex}/terms`} exact {...props}>
        <Terms />
      </Route>
      <Route path={`/:locale${languageRegex}/privacy`} exact {...props}>
        <Privacy />
      </Route>
      <Route path={`/:locale${languageRegex}/cookies`} exact {...props}>
        <Cookies />
      </Route>
      <Route path={`/:locale${languageRegex}`} exact {...props}>
        <Home />
      </Route>
      <Route {...props}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
