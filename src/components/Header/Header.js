import React from "react";
import "./Header.scss";
import Hamburger from "../../images/hamburger.svg";
const Header = () => {
  return (
    <header>
      <div className="left">
        <div className="hamburger-button">
          <img src={Hamburger} alt="hamburger" />
        </div>
        <div className="logo">
          <div className="left">2</div>
          <div className="right">
            fast
            <br />
            furious
          </div>
        </div>
      </div>
      <div className="auth">
        <div className="login">Login</div>
        <div className="signUp">Sign Up</div>
      </div>
    </header>
  );
};

export default Header;
