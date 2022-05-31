import React from 'react';
import B3 from '../../src/image/home-3/feature-l3-image.png';

function AboutStory() {
  return (
    <>
 {/* <!-- Services Area --> */}
    <div class="feature-section feature-section--l3 bg-default-3">
      <div class="container">
        {/* <!-- Section Title --> */}
        <div class="row">
          <div class="col-xl-8 col-lg-10">
            <div class="section-title section-title--l3">
              <h6 class="section-title__sub-heading" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">About us</h6>
              <h2 class="section-title__heading" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                Our short<br class="d-none d-xs-block" />
            story!
              </h2>
            </div>
          </div>
        </div>
        <div class="row mb-5 mb-lg-7">
          <div class="col-lg-6 col-md-12">
            <div class="section-title section-title--l3">
              <p class="section-title__description me-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
                Founded on May 30th, 2019, Simply Neuroscience is an international, student-led nonprofit organization dedicated to fostering students' interdisciplinary interests in the brain, specifically through neuroscience and psychology education, outreach, and awareness. Our aim is to empower youth to engage in brain-related fields through projects and initiatives on local through global scales.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="section-title section-title--l3">
              <p class="section-title__description me-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
                Overall, we work to increase early neuroscience accessibility through connecting students with free online resources, opportunities, events, mentorship, and more through our diverse array of 25 departmental initiatives. Whitin a year of establishment we have been able to:
              </p>
            </div>
          </div>
        </div>
        {/* <!--/ .Section Title --> */}
        {/* <!-- Feature Content --> */}
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="feature-content--l3__image mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
              <img class="w-100" src={B3} alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="feature-right" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              {/* <!-- Feature List --> */}
              <ul class="feature-content--l3__list list-unstyled">
                <li>Set-Up A vibrant Community</li>
                <li>Simplify Neuroscience to students</li>
                <li>Conduct Outreach</li>
              </ul>
              {/* <!--/ .Feature List --> */}
              {/* <!--Counter Bar --> */}
              <div class="feature-counter feature-counter--l3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                <div class="counter-widgets dark-mode-texts">
                  <div class="counter-widgets__single counter-content">
                    <h2 class="counter-content__heading"><span class="counter">280</span></h2>
                    <p class="counter-content__text">Followers & Subscribers</p>
                  </div>
                  <div class="counter-widgets__single counter-content">
                    <h2 class="counter-content__heading"><span class="counter">640</span></h2>
                    <p class="counter-content__text">Volunteer Staff Members</p>
                  </div>
                  <div class="counter-widgets__single counter-content">
                    <h2 class="counter-content__heading">+<span class="counter">3500</span></h2>
                    <p class="counter-content__text">Users Comments</p>
                  </div>
                </div>
              </div>
              {/* <!--/ .Counter Bar --> */}
            </div>
          </div>
        </div>
        {/* <!--/ .Feature Content --> */}
      </div>
    </div>
    {/* <!--/ .Services Area --> */}
    </>
  )
}

export default AboutStory