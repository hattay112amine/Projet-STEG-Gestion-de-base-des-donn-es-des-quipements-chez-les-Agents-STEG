import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul>
        {location.pathname !== '/' && (
          <li>
            <Link to="/">Accueil</Link>
          </li>
        )}
        <li><Link to="/ressources">Ressources</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;