import React from 'react';
import logo from "../Assets/logo.png"
const Nav = () => {

    return(
        <div>
           <nav className="navbar navbar-white bg-white">
                <div className="container">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="" style={{width:"6rem", height: "6rem"}} />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav;