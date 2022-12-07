import React from "react";
import { FaShoppingCart } from "react-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="">
        <p>Breakfast of Champions</p>
      </Link>
      <nav>
        <Link to="/cart">
          <p>cart</p>
          {/* add shopping cart icon here */}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
