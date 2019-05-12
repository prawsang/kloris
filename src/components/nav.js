import React from "react"
import logo from "../assets/web/logo.svg"
import lang from "../assets/web/th.png"

const Nav = () => (
  <div>
    <div className="nav-head">
      <div className="container">
        <img className="lang" src={lang} />
        <img className="logo" src={logo} />
      </div>
    </div>
    <nav>
      <ul className="menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">From Nature to Skin</li>
        <li className="menu-item">Intense Healing</li>
        <li className="menu-item">Support</li>
        <li className="menu-item">Contact Us</li>
      </ul>
    </nav>
  </div>
)

export default Nav
