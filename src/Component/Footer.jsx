import React from 'react'



function Footer() {
  return (
    <div>
         <footer class="footer-section footer-section--l9 position-relative bg-shark dark-mode-texts">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="footer-top border-bottom border-default-color-3 pb-5">
              <div class="row align-items-center justify-content-center">
                <div class="col-6 col-xxs-4 col-lg-4 col-md-5 col-xs-4">
                  <div class="footer-brand-block footer-brand-block--l4 mb-md-0">
                    {/* <!-- Brand Logo--> */}
                    <div class="brand-logo mb-0 text-center text-md-start mx-auto mx-md-0">
                      <a href="#">
                        {/* <!-- light version logo (logo must be black)--> */}
                        {/* <img src={A26} alt="" class="light-version-logo" /> */}
                        <p>YNAN</p>
                        {/* <!-- Dark version logo (logo must be White)--> */}
                     
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-7">
                  <div class="footer-menu text-center text-md-end">
                    <ul class="list-unstyled">
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
                        <a href="testimonial-1.html">Reviews</a>
                      </li>
                      <li>
                        <a href="contact-1.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright-block copyright-block--l3">
              <div class="row  text-center align-items-center">
                <div class="col-xs-6 text-sm-start">
   
                </div>
                <div class="col-xs-6 text-sm-end">
                  <ul class="footer-social-share footer-social-share--rounded">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer