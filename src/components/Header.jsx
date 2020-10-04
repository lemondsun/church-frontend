import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [showItems, setItems] = useState(false);

  let menuItems = (
    <div data-test="menu-items" class="topnav__menu__links">
      <Link class="topnav__links--item" to="/events">Events</Link>
      <Link class="topnav__links--item" to="/contact">Contact</Link>
      <Link class="topnav__links--item" to="/testamonies">Testamonies</Link>
    </div>
  );

  return (
    <div class='header'>
    <div class="topnav" >
      <Link data-test="logo" class="topnav__logo">
        Logo
      </Link>
      <p data-test="header-title" class="topnav__title body-header">
        JUDAH TABERNACLE OF PRAISE
      </p>
      {showItems ? menuItems : null}
      <button data-test="menu" onClick={() => setItems(!showItems)} class='topnav__menu'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
        
      </button>
     
      </div>
      </div>
      
      
  );
}
