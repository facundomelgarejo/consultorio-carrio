import React from "react";
import "./Header.css";
import logo from '../../assets/logo/logo-diente.jpg';

const Header = () => {
    return(
        <div className="header">
            <div>
                <img className="logo-d" src={logo} alt="logo" />
            </div>
            <div className="nav-right"> 
             <button className="buttom-user">Usuario</button>
            </div>      
        </div>
    );
}

export default Header;
