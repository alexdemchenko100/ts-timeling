import Logo from "./Logo";

import "./Header.scss";
import { FormattedMessage } from "react-intl";
import { useMemo } from "react";
import {
  clientDefaultLanguage,
  getCurrent,
  urlWithLocale,
} from "../lib/locale";

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
            <a href={urlWithLocale(window.location.href, "en-GB")}>Eng</a>
          )}
          {localeIso === "en-GB" && (
            <a href={urlWithLocale(window.location.href, "nb-NO")}>Nor</a>
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
