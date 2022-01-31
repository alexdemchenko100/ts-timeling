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
} from "../utils/consent";
import RouteContainer from "../components/ui/RouteContainer";

import { useRouter } from "next/router";

const CookiesRoute = () => {
  const router = useRouter();

  const { formatMessage } = useIntl();

  const [consent, setConsentState] = useState(
    getConsent() //Get current stored consent
  );

  const routeTitle = formatMessage({ id: "cookies" });
  const routeDescription = formatMessage({ id: "cookies_description" });

  const goToHomepage = () => {
    router.push(router.asPath.replace("/cookies", ""));
  };
  const handleSavePreferencesButton = () => {
    setConsent(consent);
    goToHomepage();
  };

  const handleAcceptAllCookiesButton = () => {
    setConsent(getAllConsent());
    goToHomepage();
  };

  const handleAcceptAllCookies = () => {
    const newConsent = getAllConsent();
    setConsentState(newConsent);
  };

  const handleUnacceptAllCookies = () => {
    const newConsent = getDefaultConsent();
    setConsentState(newConsent);
  };

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="cookies"
      className="cookies"
    >
      <CookieHeader title={routeTitle} />
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
