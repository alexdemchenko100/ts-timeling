import { useState } from "react";
import { useIntl } from "react-intl";
import {
    CookieHeader,
    CookieExplanation,
    CookiePreferences,
    CookieNecessary,
    CookieOptional,
    CookieActions,
} from "../components/cookies";
import RouteContainer from "../ui/RouteContainer";

import "./Cookies.scss";

const CookiesRoute = () => {
    const { formatMessage } = useIntl();

    const [cookiesPreferences, setCookiePreferences] = useState(true);

    const routeTitle = formatMessage({ id: "cookies" });
    const routeDescription = formatMessage({ id: "cookies_description" });

    const handleAcceptAllCookies = () => setCookiePreferences(true);

    const handleSavePreferences = () => null;

    const handleUnacceptAllCookies = () => setCookiePreferences(false);

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
                <CookieNecessary />
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
