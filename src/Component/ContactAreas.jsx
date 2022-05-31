import React from 'react'
import D1 from '../image/home-4/contact-map.png'


function ContactAreas() {
  return (
    <>
    
    <div class="contact-section contact-section--inner-2 bg-default-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-7">
            <div class="section-title section-title--l4 text-center mb-5 mb-md-7">
              <h6 class="section-title__sub-heading text-primary">Contact With Us</h6>
              <h2 class="section-title__heading mb-4">
                Join Our Workplaces Around<br class="d-none d-xs-block"/> The World
              </h2>
            </div>
          </div>
          <div class="col-xl-10">
            <div class="footer-map text-center mb-7">
              <img class="w-100" src={D1} alt=""/>
              <div class="card card--map-1 card--triangle-up">
                <p>4 G-ral. Traian Mosoiu Street, A Building, 2nd</p>
              </div>
              <div class="card card--map-2 card--triangle-up">
                <p>Entrance, Flat 30, Cluj-Napoca, Romania</p>
              </div>
            </div>
          </div>
          <div class="col-12 mb-7 mb-lg-0">
            <h3 class="contact-section__form-heading">Send Message</h3>
            <div class="contact-form">
              <form action="https://finestdevs.com/demos/fastland-html/">
                <div class="row">
                  <div class="col-lg-4 mb-4">
                    <div class="form-floating">
                      <input class="form-control" placeholder="Leave a comment here" id="floatinginput" />
                      <label for="floatinginput">Your Email</label>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="form-floating">
                      <input class="form-control" placeholder="Leave a comment here" id="floatinginput2" />
                      <label for="floatinginput2">Phone number</label>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="form-floating">
                      <input class="form-control" placeholder="Your Website" id="floatinginput3" />
                      <label for="floatinginput3">Your Website</label>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
                      <label for="floatingTextarea">Your Message Here </label>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="row align-items-center mt-3">
                      <div class="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                        <div class="form-check d-flex align-items-center">
                          <input class="form-check-input bg-white float-none mt-0" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                            Your email address will not be published. Required fields are marked *
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                        <button class="btn btn-primary btn--lg-2 shadow--torch-red-3 rounded-55 text-white">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ContactAreas