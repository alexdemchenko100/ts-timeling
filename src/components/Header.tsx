import Logo from "./Logo";

import "./Header.scss";
import { FormattedMessage } from "react-intl";
import { useMemo } from "react";
import {
  clientDefaultLanguage,
  getCurrent,
  urlWithLocale,
} from "../lib/locale";

const flags: any = {
  en: (
    <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H16V12H0V0Z" fill="#41479B" />
      <path
        d="M16 10.4375L10.0833 6.00001L16 1.5625V0H13.9167L8 4.43751L2.08333 0H0V1.5625L5.91667 6.00001L0 10.4375V12H2.08336L8 7.56251L13.9166 12H16V10.4375Z"
        fill="white"
      />
      <path
        d="M0 0.62513V0H0.833161L7.99951 5.37477L15.1659 0H15.9997L16 0.000415282V0.624395L8.83284 5.99977L16 11.3751V11.9991L15.9993 12H15.1665L7.99951 6.62477L0.832552 12H0V11.3744L7.16618 5.99977L0 0.62513Z"
        fill="#DC251C"
      />
      <path d="M6 4V0H10V4H16V8H10V12H6V8H0V4H6Z" fill="white" />
      <path d="M7 5V0H9V5H16V7H9V12H7V7H0V5H7Z" fill="#DC251C" />
    </svg>
  ),
  nb: (
    <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="12" fill="#DC251C" />
      <rect x="4" width="4" height="12" fill="#F5F8FB" />
      <rect
        x="16"
        y="4"
        width="4"
        height="16"
        transform="rotate(90 16 4)"
        fill="#F5F8FB"
      />
      <rect x="5" width="2" height="12" fill="#41479B" />
      <rect
        x="16"
        y="5"
        width="2"
        height="16"
        transform="rotate(90 16 5)"
        fill="#41479B"
      />
    </svg>
  ),
};

const Header = ({ children }: any) => {
  const localeIso = useMemo(() => getCurrent() || clientDefaultLanguage, []);

  return (
    <header>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        src="/assets/hero.mp4"
        poster="/assets/hero.png"
      />
      <div className="container">
        <div className="language">
          {localeIso === "nb-NO" && (
            <>
              {flags["en"]}
              <a href={urlWithLocale(window.location.href, "en-GB")}>Eng</a>
            </>
          )}
          {localeIso === "en-GB" && (
            <>
              {flags["nb"]}
              <a href={urlWithLocale(window.location.href, "nb-NO")}>Nor</a>
            </>
          )}
        </div>
        <Logo />
        <h1 className="big">
          <FormattedMessage id="headline" />
        </h1>
        <p className="big non-mobile">
          <FormattedMessage id="headline_sub" />
        </p>
        <p className="non-mobile">
          <FormattedMessage id="headline_sub2" />
          <br />
          <FormattedMessage id="dont_miss_out" />
        </p>
        <p className="mobile">
          <FormattedMessage id="headline_sub2_short" />
          <br />
          <FormattedMessage id="dont_miss_out" />
        </p>
        {children}
      </div>
    </header>
  );
};

export default Header;
