import Logo from "./Logo";

import "./Footer.scss";
import { FormattedMessage } from "react-intl";
import Link from "./global/Link";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <Logo />
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
      <div className="bottom">
        <p>© 2021 Timeling Inc.</p>
        <div className="socials">
          <Link href="https://www.facebook.com/timelingapp">
            <img
              src="/assets/logo/facebook.svg"
              loading="lazy"
              alt="Facebook"
            />
          </Link>
          <Link href="https://twitter.com">
            <img src="/assets/logo/twitter.svg" loading="lazy" alt="Twitter" />
          </Link>
          <Link href="https://www.instagram.com/timelingapp">
            <img
              src="/assets/logo/instagram.svg"
              loading="lazy"
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
