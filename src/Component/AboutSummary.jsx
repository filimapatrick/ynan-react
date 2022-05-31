import React from 'react';
import B1 from '../../src/image/png/inner-banner-shape.png';
import B2 from '../../src/image/home-5/about-us-l5-img.png';



function AboutSummary() {
  return (
    <>
{/* <!-- Page Title Area --> */}
    <div className="page-title-content text-center bg-default-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <h2 className="page-title-content__heading">About Us</h2>
            <p className="page-title-content__text">Here at Youth Neuroscience Association of Nigeria, our mission is to advance international collaborations of young neuroscientists and Neuro-practitioners. </p>
          </div>
        </div>
      </div>
      <div className="shape">
        <img className="w-100" src={B1} alt=""/>
      </div>
    </div>
    {/* <!--/ .Page Title Area --> */}

    {/* <!-- Video Area --> */}
    <div className="about-us-section about-us-section--l5 bg-default">
      <div className="container">
        {/* <!-- about-us Content --> */}
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-8 col-xs-10" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div className="about-us__image">
              <img className="w-100" src={B2} alt="" />
              {/* <!-- Video Button --> */}
              <a className="video-btn btn-primary popup-btn sonar-emitter" href="https://www.youtube.com/watch?v=LWZ7iytIA6k"> <i className="fa fa-play"></i> </a>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-8 col-xs-10" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
            <div className="about-us-right mt-4 mt-lg-0">
              <div className="section-title section-title--l5">
                <h6 className="section-title__sub-heading text-primary">Watch video</h6>
                <h2 className="section-title__heading mb-4">Watch how we work</h2>
                <p className="section-title__description">Here at Youth Neuroscience Association of Nigeria, our mission is to advance international collaborations of young neuroscientists and Neuro-practitioners by educating them about the brain and motivating them to pursue neuro related career in order to fight the increasing neurological diseases in Nigeria and also contribute to the global community through advocacy.</p>
              </div>
              <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ .about-us Content --> */}
      </div>
    </div>
    {/* <!--/ .Video Area --> */}
    </>
  )
}

export default AboutSummary