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
      <div className="container">
        <div className="language">
          {localeIso === "nb-NO" && (
            <a href={urlWithLocale(window.location.href, "en-GB")}>English</a>
          )}
          {localeIso === "en-GB" && (
            <a href={urlWithLocale(window.location.href, "nb-NO")}>Norwegian</a>
          )}
        </div>
        <Logo />
        <h1 className="big">
          <FormattedMessage id="headline" />
        </h1>
        <p className="non-mobile">
          <FormattedMessage id="headline_sub" />
        </p>
        {children}
      </div>
    </header>
  );
};

export default Header;
