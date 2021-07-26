import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navSection">
      <div className="navContainer">
        <p className="navLogo">
          <Link to="/">BootyCamp</Link>
        </p>
        <ul className="navItems">
          <li>
            <Link to="/">Fetch User</Link>
          </li>
          <li>
            <Link to="/autofetch">Auto Fetch</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
