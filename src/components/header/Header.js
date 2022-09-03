import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="login-btn">Login</div>
      </div>
    </header>
  );
}

export default Header;
