import React from 'react';
import B10 from '../image/png/inner-banner-shape.png'
// import B11 from '../image'



function FooterTwo() {
  return (
    <div>
        <div className="promo-area promo-area--inner-about bg-electric-violet-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="promo-content dark-mode-texts text-center">
              <h2 className="promo-content__title">Want To Know Our Student Team? </h2>
              <a href='student-team.html'> 
              <button className="btn btn-primary shadow--primary-5 btn--lg-2 rounded-50 text-white mt-5" >Just A click</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img className="w-100" src={B10} alt=""/>
      </div>
    </div>
    {/* <!--/ .Footer Area -->
    <!-- Footer Area --> */}
    <div className="footer-area footer-inner-1 position-relative bg-default-3">
      <div className="container">
        <footer className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-md-7 col-xs-9">
              <div className="footer-widgets footer-widgets--l7">
                {/* <!-- Brand Logo--> */}
                <div className="brand-logo mt-1">
                  <a href="#">
                    {/* <!-- light version logo (logo must be black)--> */}
                    {/* <img src="./ynan.jpeg" alt="" className="light-version-logo" style='height:70px;'/> */}
                    {/* <!-- Dark version logo (logo must be White)--> */}
                  
                  </a>
                </div>
                <p className="footer-widgets__text mt-5">
                YNAN is an association that provides
 <br className="d-none d-xl-block"/> a platform for interaction,innovation,<br className="d-none d-xl-block"/> creativity and career opportunities..</p>
                <ul className="footer-social-share footer-social-share--rounded mt-4">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="footer-widgets footer-widgets--l7">
                    <h4 className="footer-widgets__title">Contact Details</h4>
                    <ul className="footer-widgets__list footer-widgets--address">
                      <li>
                        <i className="fa fa-map-marker-alt text-electric-violet-2"></i>
                        <span>Address: <br className="d-block"/>
                                            4401 Waldeck Street,<br className="d-block"/>
                                            Grapevine Nashville, Tx 76051</span>
                      </li>
                      <li>
                        <i className="fa fa-phone-alt text-electric-violet-2"></i>
                        <div className="list-content">
                          <span className="d-block gr-text-hover-decoration-none"> Phone: </span>
                          <a href="#">+99 (0) 101 0000 888</a>
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-envelope text-electric-violet-2"></i>
                        <a className="heading-default-color gr-text-hover-underline text-break" href="mailto:info@medcartel.com">
                          <span className="d-block gr-text-hover-decoration-none"> Phone:
                                            </span>info@medcartel.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="footer-widgets footer-widgets--l7 mb-10 mb-md-0">
                    <h4 className="footer-widgets__title">YNAN</h4>
                    <ul className="footer-widgets__list">
                      <li>
                        <a href="about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="terms-page.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-page.html">Terms & Conditions</a>
                      </li>
   
                      <li>
                        <a href="contact-1.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-xs-9">







                    
              
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright text-center border-top border-default-color-3">

        </div>
      </div>
    </div>
    {/* <!--/ .Footer Area --></div> */}
    </div>
  )
}

export default FooterTwo