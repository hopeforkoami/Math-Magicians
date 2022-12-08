import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="project_title">
      Math Magicians
    </div>
    <nav>
      <ul className="menu">
        <Link to="/"><li className="menu_element start_menu_element selected_menu_element">Home</li></Link>
        <Link to="/calcul"><li className="menu_element">Calculator</li></Link>
        <Link to="/quote"><li className="menu_element">Quote</li></Link>
      </ul>
    </nav>
  </header>
);

export default Header;
