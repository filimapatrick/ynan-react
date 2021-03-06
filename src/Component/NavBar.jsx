import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import logo from '../Img/ynan.png'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <div className="logo-area">
           <img src='./ynan.jpeg' alt=''/>
           </div>
          
          
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/event"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              {/* <div className="nav-btn"> */}
              <a className="register" href="https://forms.gle/SG99c7gdPQGgaU9K9">Register </a>
                {/* exact
                to="https://docs.google.com/forms/d/1JGWJae6Ztb9I-aKa_K8r_qwmEhR06hAWY42cCbkKo-0/edit"
                activeClassName="active"
                className="nav-links" */}
               
              {/* > */}
                {/* Register */}
              {/* </div> */}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;