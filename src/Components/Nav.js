import React from 'react';
import logo from "../Assets/logo.png"
const Nav = () => {

    return(
        <div>
           <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="30" height="24"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav;