import React from 'react'

function Navbar() {
  return (
    <div>


         {/* <!-- Header Area --> */}
    <div className="site-header site-header--menu-left dynamic-sticky-bg px-3 site-header--absolute site-header--sticky">
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          {/* <!-- Brand Logo--> */}
          <div className="brand-logo">
            <a href="home.html">
              {/* <!-- light version logo (logo must be black)--> */}
              <img src="./ynan.png" alt="" className="light-version-logo" style='height:70px;'/>
              {/* <!-- Dark version logo (logo must be White)--> */}
              {/* <img src="image/png/logo-white.png" alt="" className="dark-version-logo"/> */}
            </a>
          </div>
          <div className="menu-block-wrapper  ms-lg-7">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="home.html" className="nav-link-item drop-trigger">Home 
                  </a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="about-us.html" className="nav-link-item drop-trigger">About Us 
                  </a>
                  
                </li>
                <li className="nav-item nav-item-has-children has-megamenu">
                  <a href="#" className="nav-link-item drop-trigger">Events <i className="fas fa-angle-down"></i>
                  </a>
                  <div className="sub-menu megamenu  megadropdown-center  d-lg-flex" id="submenu-100">
                    <ul className="col-lg-12 row-lg list-unstyled py-lg-">
                      <li className="col-lg-3">
                       
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="blog.html" className="nav-link-item drop-trigger">Blogs
                  </a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="contact-1.html" className="nav-link-item drop-trigger">Contact 
                  </a>
                </li>

                <li className="nav-item nav-item-has-children">
                  <a href="contact-1.html" className="nav-link-item drop-trigger">Register
                  </a>
                </li>

                <li className="nav-item nav-item-has-children">
                  <a href="contact-1.html" className="nav-link-item drop-trigger">Whatsapp chat
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <!-- mobile menu trigger --> */}
          <div className="mobile-menu-trigger">
            <span></span>
          </div>
          {/* <!--/.Mobile Menu Hamburger Ends--> */}
        </nav>
      </div>
    </div>
    {/* <!-- navbar- -->
    <!--/ .Header Area --> */}
    </div>
  )
}

export default Navbar