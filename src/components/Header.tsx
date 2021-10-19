import Logo from "./Logo";

import "./Header.scss";
import { FormattedMessage } from "react-intl";

const Header = ({ children }: any) => {
  return (
    <header>
      <div className="container">
        <Logo />
        <h1 className="big">
          <FormattedMessage id="headline" />
        </h1>
        <p className="non-mobile">
          <FormattedMessage id="sub_headline" />
        </p>
        {children}
      </div>
    </header>
  );
};

export default Header;
