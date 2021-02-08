import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [showItems, setItems] = useState(false);

  let menuItems = (
    <div data-test="menu-items" class="topnav__menu__links">
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
      <Link class="topnav__links--item" to="/testimonies"
      onClick={() => setItems(!showItems)}
      >
        Testimonies
      </Link>
    </div>
  );

  return (
    <div class="header">
      <div class="topnav" >
       
        <p data-test="header-title" class="topnav__title header-title">
          JTOP
        </p>
        {showItems ? menuItems : null}
        <button
          data-test="menu"
          onClick={() => setItems(!showItems)}
          class="topnav__menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
