import React, {useState} from "react";
import './Header.css' 
import logo from "../../assets/logo/logo-diente.jpg";


import 'bootstrap/dist/css/bootstrap.min.css'; 


const Header = () =>{


    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <  img
                    src={logo} alt="logo-diente"
                    className="logo-style"
                    />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                
                <div className="dropdown-display"> 
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                         <li class="embed-responsive">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cuenta
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <a class="dropdown-item" href="http://www.google.com">Config</a>
                            <a class="dropdown-item" href="../../Pages/Login/Login.js">Salir</a>

                            </ul>
                        </li> 
                    
                    </ul>
                    
                </div> 
            
            </div>
        </div>
        </nav>
        /* 
          <header className="header-container">
            <img
            src={logo} alt="logo-diente"
            className="logo-style"
            />
                
             <div className="lista-btn"> </div>
             <button onClick={handleSubmit} className="btn"></button>
           
            
            
        </header>  */
) ;
    
}

export default Header;