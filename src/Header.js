
import React from 'react';
import { NavLink } from "react-router-dom";

function Header () {
return <div>

<nav className="navWrapper">
      <h1>
          <NavLink className="iconLink" to="/">
            Home
          </NavLink>
       </h1>   
        </nav>
</div>
}

export default Header;
