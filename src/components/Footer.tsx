import Logo from "./Logo";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <Logo />
        <div className="links"></div>
      </div>
      <div className="bottom">
        <p>© 2021 Timeling Inc.</p>
        <div className="socials">
          <a
            href="https://www.facebook.com/timelingapp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/logo/facebook.svg"
              loading="lazy"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/assets/logo/twitter.svg" loading="lazy" alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/timelingapp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/logo/instagram.svg"
              loading="lazy"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
