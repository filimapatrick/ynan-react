import React from 'react'
 import A24 from '../image/home-8/blogs-img-1.png';
 import A25 from '../image/home-8/blogs-img-2.png';
  import A28 from '../image/home-8/blogs-img-3.png';

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
                  <a href="blog-details.html" class="hover-content__badge badge bg-yellow text-shark">Gadgets</a>
                  <a href="blog-details.html" class="hover-content__date">01 June, 2020</a>
                </div>
                <a href="blog-details.html" class="hover-content__title">We can blend colors multiple<br class='d-none d-xs-block'/> ways, the most common</a>
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
          {/* <!--/ .Single Blogs --> */}
          <div class="col-lg-4 col-md-6 col-xs-10">
            <div class="blogs-post blogs-post--small">
              <img class="w-100" src={A25} alt=""/>
              <div class="hover-content">
                <div class="hover-content__top d-flex align-items-center dark-mode-texts">
                  <a href="blog-details.html" class="hover-content__badge badge bg-yellow text-shark">Gadgets</a>
                  <a href="blog-details.html" class="hover-content__date">01 June, 2020</a>
                </div>
                <a href="blog-details.html" class="hover-content__title">We can blend colors multiple<br class='d-none d-xs-block'/> ways, the most common</a>
                <ul class="hover-content__post-meta list-unstyled">
                  <li>
                    <a href="blog-details.html">By George Lee</a>
                    <a href="blog-details.html"> 0 Comments</a>
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
                  <a href="blog-details.html" class="hover-content__badge badge bg-yellow text-shark">Gadgets</a>
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