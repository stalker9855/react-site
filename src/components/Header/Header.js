import React, { useState } from "react";
import '../Header/Header.css'


function Header({selectedProducts}) {
  return(
    <header>
      <p className="logo">Logo</p>
      <nav>
        <ul className="nav__links">
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">SHOP</a></li>
          <li><a href="">CONTACT</a></li>
          {selectedProducts > 0? <li id="selected">SELECTED: {selectedProducts}</li> : undefined}
        </ul>
      </nav>
      <a className="cta" href=""><button>Login</button></a>
    </header>
  )
}
export default Header;
