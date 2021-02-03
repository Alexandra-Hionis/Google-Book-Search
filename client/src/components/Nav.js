import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../images/google-books-logo.png"
import '../App.css';


function Nav() {
    return (
        
<div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
    {/* <Link to="/pages/SearchPage"
                            className={
                                window.location.pathname === "/pages/SearchPage" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "navbar-brand"
                            }>
                                <img src={Logo} id="logo" class="navbar-brand" alt="logo"/>
            </Link>  */}
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link  to="/pages/SearchPage"
                            className={window.location.pathname === "/pages/SearchPage" ? "nav-link active" : "nav-link"}
                        >
                            Search Books
            </Link>
              
            </li>
            <li className="nav-item">
            <Link  to="/pages/SavePage"
                            className={window.location.pathname === "/pages/SavePage" ? "nav-link active" : "nav-link"}
                        >
                            Saved Books
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>

    );
}

export default Nav;