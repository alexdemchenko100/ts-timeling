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
        <Link className="logo" href="/">
          <Logo />
        </Link>
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
      <div className="bottom content-width">
        <p>
          © {new Date().getFullYear()} {COMPANY_NAME}
        </p>
        <div className="socials">
          <Link href="https://www.facebook.com/timelingapp">
            <Icon id="facebook" />
          </Link>
          <Link href="https://tiktok.com">
            <Icon id="tiktok" />
          </Link>
          <Link href="https://www.instagram.com/timelingapp">
            <Icon id="instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
