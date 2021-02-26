import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger_icon from '../images/Hamburger_icon.svg.png'

export default function Header() {
  let [showItems, setItems] = useState(false);

  let menuItems = (
    <div data-test="menu-items" class="topnav__links">
      <Link class="topnav__links--item" to="/ourstory"
      onClick={() => setItems(!showItems)}
      >
        Our Story
      </Link>
      <Link class="topnav__links--item" to="/contact"
      onClick={() => setItems(!showItems)}
      >
        Contact
      </Link>
     
    </div>
  );

  return (
      <div class="topnav" >
       <Link to='/'>
        <p data-test="header-title" class="topnav__title header-title">
          Judah Tabernacle of praise
        </p>
        </Link>
        {showItems ? menuItems : null}
      

      <img onClick={() => setItems(!showItems)} class='topnav--button' src={Hamburger_icon} />
      </div>
   
  );
}
