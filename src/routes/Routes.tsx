import { lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { languages } from "../lib/locale";

const NotFound = lazy(() => import("./NotFound"));
const Terms = lazy(() => import("./Terms"));
const Privacy = lazy(() => import("./Privacy"));
const Cookies = lazy(() => import("./Cookies"));
const Home = lazy(() => import("./Home"));
const Unsubscribe = lazy(() => import("./Unsubscribe"));

const languageRegex = `(${languages.join("|")})`;

const Routes = (props: any) => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <main className="route-container loading">
          <div className="content route" />
        </main>
      }
    >
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
        <Route path={`/:locale${languageRegex}/unsubscribe`} exact {...props}>
          <Unsubscribe />
        </Route>
        <Route path={`/:locale${languageRegex}`} exact {...props}>
          <Home />
        </Route>
        <Route {...props}>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
