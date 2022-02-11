import React from 'react';
import logo from "../Assets/logo.png"


const Nav = () => {

    return (
        <header className='navbar'>
           <div>
              <img src={logo} alt="logo" />
           </div>
           <nav>
              <ul>
                  <li>HOME</li>
                  <li>MUJER</li>
                  <li>HOMBRE</li>
              </ul>
           </nav>
        </header>
    )
}

export default Nav;