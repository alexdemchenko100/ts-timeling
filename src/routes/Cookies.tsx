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
  getDefaultConsent,
  setConsent,
} from "../lib/consent";
import RouteContainer from "../ui/RouteContainer";

import "./Cookies.scss";

const CookiesRoute = () => {
  const { formatMessage } = useIntl();

  const [consent, setConsentState] = useState(
    getConsent() //Get current stored consent
  );

  const routeTitle = formatMessage({ id: "cookies" });
  const routeDescription = formatMessage({ id: "cookies_description" });

  const goToHomepage = () => {
    window.location.href = window.location.href.replace("/cookies", "");
  };
  const handleSavePreferencesButton = () => {
    setConsent(consent);
    goToHomepage();
  };

  const handleAcceptAllCookiesButton = () => {
    handleAcceptAllCookies();
    goToHomepage();
  };

  const handleAcceptAllCookies = () => {
    const newConsent = getAllConsent();
    setConsentState(newConsent);
    setConsent(newConsent);
  };

  const handleUnacceptAllCookies = () => {
    const newConsent = getDefaultConsent();
    setConsentState(newConsent);
    setConsent(newConsent);
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
          cookiePreferences={consent.ads}
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
