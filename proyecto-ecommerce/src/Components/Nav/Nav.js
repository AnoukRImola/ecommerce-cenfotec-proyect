import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/img/logo.png"
import "../Nav/Nav.css"


const Nav = () => {

    return (
        <header className='navbar'>
           <div>
              <img src={logo} alt="logo" />
           </div>
           <nav>
              <ul>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/mujer">MUJER</Link></li>
                  <li><Link to="/hombre">HOMBRE</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
              </ul>
           </nav>
        </header>
    )
}

export default Nav;