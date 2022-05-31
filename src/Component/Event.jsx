import React from 'react'
import A2 from '../image/brainbee/brainbee1.jpg';
import A3 from '../image/brainbee/brainbee2.jpg';
import A4 from '../image/Brain-Awareness-Week/Bawarenes8.jpg';

function Event() {
  return (
    <div>
        
    {/* <!-- Services Two Area --> */}
    <div class="services-area services-area--l9-1 bg-default-9">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-8 col-xs-10 order- order-lg-1">
            <div class="services-content-box">
              {/* <!-- Section Title --> */}
              <div class="section-title section-title--l9">
                <h6 class="section-title__sub-heading text-electric-violet- sub-heading--electric-violet-" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Our Activities</h6>
                <h3 class="section-title__heading" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Nigerian  Brain Bee Competition for secondary school students  is now open.</h3>
                <p class="section-title__description" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">  The Nigerian Brain Bee is a neuroscience competition for high school students (teenagers) between the ages of 13 and 19. It will be held during the Neuroscience Society of Nigeria conference in Ibadan. The series of events include:</p>
              </div>
              {/* <!--/ .Section Title --> */}
              <ul class="services-content-box__list list-unstyled" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                <li>The online quiz on the 1st June , 2022</li>
                <li>The final  held  during the NSN conference</li>


              </ul>
              <ul>
                <li>The winners shall be awarded with 100,0000 for 1st Position </li>
                <li>The winners shall be awarded with 75,000 for the second position</li>
                 <li>The winners shall be awarded with 50,000  for the third</li>
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuT0At4FZJvfaS9YHNGMUA1qH8Zrk8zJ0wc1AP1e9U1W9atg/closedform" >Click Here To Register</a>
              </ul>
            </div>
          </div>

         



          <div class="col-xl-7 col-lg-6 col-md-6 col-xs-10 order-1 order-lg-">
            <div class="services-content-img ps-xl-5">
              <div class="row">
                <div class="col-lg-6 pt-lg-7 mb-5 mb-lg-0">
                  <div class="services-content-img__1">
                    <img class="w-100" src={A2} alt=""/>
                  </div>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="services-content-img__2">
                    <img class="w-100" src={A3} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--/ .Services Two Area --> */}
    {/* <!-- About Us Area --> */}
    <div class="about-us-area about-us-area--l9 bg-default">
      <div class="container">
        <div class="row align-items-center justify-content-center g-0">
          <div class="col-xxl-6 col-lg-5 col-md-10">
            <div class="about-us-img mb-4 mb-lg-0">
              <img data-aos='fade-right' class="w-100" src={A4} alt=""/>
            </div>
          </div>
          <div class="col-xxl-6 col-lg-7 col-md-10">
            <div class="about-us-content-box bg-gorse">
              {/* <!-- Section Title --> */}
              <div class="section-title section-title--l9">
                <h6 class="section-title__sub-heading text-electric-violet- sub-heading--electric-violet-" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Our Activities</h6>
                <h2 class="section-title__heading" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                  BRAINBEE COMPETITIONS </h2>
                <p class="section-title__description" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">It was an amazing time for members of YNAN, UNIPORT Chapter in partnership with Women In Neuroscience, Nigeria on a one day HANDS-ON WORKSHOP on RAT BRAIN DISSECTION AND BRAIN PERFUSION FIXATION..</p>
              </div>
              {/* <!--/ .Section Title --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Event