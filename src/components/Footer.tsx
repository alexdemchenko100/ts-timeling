import Logo from "./Logo";

import "./Footer.scss";
import { FormattedMessage } from "react-intl";
import Link from "./global/Link";
import Icon from "./global/Icon";
import { COMPANY_NAME } from "../lib/config";

const Footer = () => {
  return (
    <footer>
      <div className="top content-width">
        <Link className="logo non-mobile" href="/">
          <Logo />
        </Link>
        <p className="mobile">
          <FormattedMessage id="follow_us" />
        </p>
        <div className="links">
          <Link href="https://instagram.com/timeling.app">
            <Icon id="instagram" />
            Instagram
          </Link>
          <Link href="https://tiktok.com/@timeling.app">
            <Icon id="tiktok" />
            TikTok
          </Link>
          <Link href="https://facebook.com/timelingapp">
            <Icon id="facebook" />
            Facebook
          </Link>
        </div>
      </div>
      <div className="bottom content-width">
        <Link className="logo mobile" href="/">
          <Logo />
        </Link>
        <p>
          © {new Date().getFullYear()} {COMPANY_NAME}
        </p>
        <div className="links">
          <Link href="/terms">
            <FormattedMessage id="terms_of_service" />
          </Link>
          <Link href="/privacy">
            <FormattedMessage id="privacy_policy" />
          </Link>
          <Link href="/cookies">
            <FormattedMessage id="cookies" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
