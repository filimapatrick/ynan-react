import React from 'react'

function ContactArea() {
  return (
    <>

{/* <!-- contact Area --> */}
    <div className="contact-section contact-inner-1 bg-default-3 border-bottom border-default-color-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 mb-7 mb-lg-0">
            <div className="section-title section-title--l3 text-left mb-5 mb-md-7" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              <h6 className="section-title__sub-heading">Contact Us</h6>
              <h2 className="section-title__heading mb-4">
                Send A Message
              </h2>
           
              <p className="section-title__description">When, while lovely valley teems with vapour around meand <br className="d-none d-xs-block"/> meridian the upper impenetrable.</p>
            </div>
            <form  className="contact-form" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" >
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input className="form-control" placeholder="Leave a comment here" id="floatinginput" required/>
                    <label for="floatinginput">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" required />
                    <label for="floatinginput2">Phone number</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3"  style="height: 100px" required></textarea>
                    <label for="floatingTextarea3">Your Message Here </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row align-items-center mt-3">
                    <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                      <div className="form-check d-flex align-items-center">
                        <input className="form-check-input bg-white float-none mt-0" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Your email address will not be published. Required fields are marked *
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                      <button className="btn btn-primary shadow--primary-4 btn--lg-2 rounded-55 text-white" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-4 offset-xl-1 col-lg-5" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
            <div className="contact-widget-box">
              <div className="contact-widget-box__title-block">
                <h2 className="widget-box__title">Get In Touch</h2>
                <p className="widget-box__paragraph">therefore always free from repetition, injected <br className="d-none d-xs-block d-lg-none d-xxl-block"/> humour, or non-characteristic</p>
              </div>
              <div className="contact-widgets-wrapper row">
                <div className="widget widget--contact col-lg-12 col-sm-6">
                  <div className="widget-icon widget-icon--circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="widget-body">
                    <h3 className="widget-body--title">visit us :</h3>
                    <p>27 Division St, New York, <br className="d-block"/> NY 10002, USA</p>
                  </div>
                </div>
                <div className="widget widget--contact col-lg-12 col-sm-6 active">
                  <div className="widget-icon widget-icon--circle">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="widget-body">
                    <h3 className="widget-body--title">mail us :</h3>
                    <p>phlox@mail.com <br className="d-block"/> contact@mail.com</p>
                  </div>
                </div>
                <div className="widget widget--contact col-lg-12 col-sm-6">
                  <div className="widget-icon widget-icon--circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="widget-body">
                    <h3 className="widget-body--title">call us :</h3>
                    <p>+8 (123) 985 789 <br className="d-block"/> +1 (123) 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--/ .contact Area --> */}
    </>
  )
}

export default ContactArea