import { useState } from "react";
import { useIntl } from "react-intl";
import {
  CookieHeader,
  CookieExplanation,
  CookiePreferences,
  CookieOptional,
  CookieActions,
} from "../components/cookies";
import {
  getAllConsent,
  getConsent,
  hasConsent,
  setConsent,
} from "../lib/consent";
import RouteContainer from "../ui/RouteContainer";

import "./Cookies.scss";

const CookiesRoute = () => {
  const { formatMessage } = useIntl();

  const [cookiesPreferences, setCookiePreferences] = useState(
    hasConsent("ads")
  );

  const routeTitle = formatMessage({ id: "cookies" });
  const routeDescription = formatMessage({ id: "cookies_description" });

  const handleAcceptAllCookies = () => {
    setCookiePreferences(true);
    setConsent(getAllConsent());
  };

  const handleSavePreferences = () => () => window.location.reload();

  const handleUnacceptAllCookies = () => {
    setCookiePreferences(false);
    setConsent(getConsent());
  };

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="cookies"
      className="cookies"
    >
      <CookieHeader title={routeTitle} countryName="Nor" />
      <div className="content-width-1110 content">
        <CookieExplanation />
        <CookiePreferences handleOnClick={handleAcceptAllCookies} />
        {/* <CookieNecessary /> */}
        <CookieOptional
          handleAcceptAllCookies={handleAcceptAllCookies}
          handleUnacceptAllCookies={handleUnacceptAllCookies}
          cookiePreferences={cookiesPreferences}
        />
        <CookieActions
          handleAcceptAllCookies={handleAcceptAllCookies}
          handleSavePreferences={handleSavePreferences}
        />
      </div>
    </RouteContainer>
  );
};

export default CookiesRoute;
