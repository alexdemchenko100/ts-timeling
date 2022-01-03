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

  const goToHomepage = () => {
    window.location.href = window.location.href.replace("/cookies", "");
  };
  const handleSavePreferencesButton = () => {
    goToHomepage();
  };

  const handleAcceptAllCookiesButton = () => {
    handleAcceptAllCookies();
    goToHomepage();
  };

  const handleAcceptAllCookies = () => {
    setCookiePreferences(true);
    setConsent(getAllConsent());
  };

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
        <CookiePreferences handleOnClick={handleAcceptAllCookiesButton} />
        {/* <CookieNecessary /> */}
        <CookieOptional
          handleAcceptAllCookies={handleAcceptAllCookies}
          handleUnacceptAllCookies={handleUnacceptAllCookies}
          cookiePreferences={cookiesPreferences}
        />
        <CookieActions
          handleAcceptAllCookies={handleAcceptAllCookiesButton}
          handleSavePreferences={handleSavePreferencesButton}
        />
      </div>
    </RouteContainer>
  );
};

export default CookiesRoute;
