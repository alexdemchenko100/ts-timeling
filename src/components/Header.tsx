import Logo from "./Logo";

import "./Header.scss";

const Header = ({ children }: any) => {
  return (
    <header>
      <div className="container">
        <Logo />
        <h1 className="big">We have a date for you</h1>
        <p className="non-mobile">
          Meet Timeling. Your calendar-based dating app for real life
          connections.
        </p>
        {children}
      </div>
    </header>
  );
};

export default Header;
