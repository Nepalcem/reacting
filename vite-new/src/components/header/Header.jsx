import React from "react";
import logo from "../../assets/images/react.svg";

function Header() {
  return (
    <header className="header">
          <img src={logo} alt="" />
      <nav>
        <ul className="menu">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
