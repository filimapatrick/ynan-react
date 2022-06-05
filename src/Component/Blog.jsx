import React from 'react'
//  import A24 from '../image/home-8/blogs-img-1.png';
//  import A25 from '../image/home-8/blogs-img-2.png';
import A25 from '../image/home-8/A25.jpg';
  import A28 from '../image/home-8/blogs-img-3.png';
  import A24 from '../image/home-8/A24.jpg';

function Blog() {
  return (
    <>
<div class="blog-area blog-area--l9 bg-default">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            {/* <!-- Section Title --> */}
            <div class="section-title section-title--l9 text-center">
              {/* <h6 class="section-title__sub-heading text-electric-violet-" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Blog</h6> */}
              <h2 class="section-title__heading" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">Latest Posts</h2>
            </div>
            {/* <!--/ .Section Title --> */}
          </div>
        </div>
        <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true">
          {/* <!--/ .Single Blogs --> */}
          <div class="col-lg-4 col-md-6 col-xs-10">
            <div class="blogs-post blogs-post--small">
              <img class="w-100" src={A24} alt=""/>
              <div class="hover-content">
                <div class="hover-content__top d-flex align-items-center dark-mode-texts">
                
                  <a href="https://www.scientificamerican.com/article/cells-deep-in-your-brain-place-time-stamps-on-memories/" class="hover-content__date">01 June, 2020</a>
                </div>
                <a href="https://www.scientificamerican.com/article/cells-deep-in-your-brain-place-time-stamps-on-memories/" class="hover-content__title">Cells Deep in Your Brain Place<br class='d-none d-xs-block'/> Time Stamps on Memories</a>
                <ul class="hover-content__post-meta list-unstyled">
                  <li>
                    <a href="blog-details.html">By Abdulrahman Olagunju on December</a>
                    <a href="#"> 10 Comments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--/ .Single Blogs --> */}
          {/* <!--/ .Single Blogs --> */}
          <div class="col-lg-4 col-md-6 col-xs-10">
            <div class="blogs-post blogs-post--small">
              <img class="w-100" src={A25} alt=""/>
              <div class="hover-content">
                <div class="hover-content__top d-flex align-items-center dark-mode-texts"> 
                  <a href="https://www.researchgate.net/publication/338128621_Neuroprotective_effect_of_aqueous_extract_of_xylopia_aethiopica_seed_on_lead-induced_injury_on_the_hippocampus_and_cerebral_cortex_of_male_wistar_rat" class="hover-content__date">01 June, 2020</a>
                </div>
                <a href="https://www.researchgate.net/publication/338128621_Neuroprotective_effect_of_aqueous_extract_of_xylopia_aethiopica_seed_on_lead-induced_injury_on_the_hippocampus_and_cerebral_cortex_of_male_wistar_rat" class="hover-content__title">Neuroprotective effect of aqueous extract of xylopia aethiopica seed<br class='d-none d-xs-block'/> on lead-induced injury on the hippocampus and cerebral cortex of male wistar rat</a>
                <ul class="hover-content__post-meta list-unstyled">
                  <li>
                    <a href="blog-details.html">By Filima & Sotonye</a>
                    <a href="blog-details.html"> 20 Comments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--/ .Single Blogs -->
          <!--/ .Single Blogs --> */}
          <div class="col-lg-4 col-md-6 col-xs-10">
            <div class="blogs-post blogs-post--small">
              <img class="w-100" src={A28} alt=""/>
              <div class="hover-content">
                <div class="hover-content__top d-flex align-items-center dark-mode-texts">
                  <a href="blog-details.html" class="hover-content__date">01 June, 2020</a>
                </div>
                <a href="blog-details.html" class="hover-content__title">We can blend colors multiple <br class='d-none d-xs-block'/> ways, the most common</a>
                <ul class="hover-content__post-meta list-unstyled">
                  <li>
                    <a href="blog-details.html">By George Lee</a>
                    <a href="blog-details.html"> 0 Comments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--/ .Single Blogs --> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog