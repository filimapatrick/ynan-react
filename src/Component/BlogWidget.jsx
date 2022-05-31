import React from 'react'

function BlogWidget() {
  return (
    <>
{/* <!-- Single Widgets --> */}
              <div class="widget">
                <h3 class="widget__title">Search</h3>
                <div class="widget__search">
                  <form action="https://finestdevs.com/demos/fastland-html/">
                    <i class="fa fa-search text-royal-blue"></i>
                    <input type="text" placeholder="Type to search"/>
                  </form>
                </div>
              </div>
              {/* <!--/ .Single Widgets -->
              <!-- Single Widgets --> */}
              <div class="widget">
                <h3 class="widget__title">Recent Posts</h3>
                <ul class="widget__recent-post list-unstyled mb-0 pb-0">
                  <li class="widget__recent-post__single">
                    <a href="#">
                      <h4 class="widget__recent-post__title">How To Blow Through Capital At An Incredible Rate</h4>
                      <p class="widget__recent-post__date">Jan 14, 2020</p>
                    </a>
                  </li>
                  <li class="widget__recent-post__single">
                    <a href="#">
                      <h4 class="widget__recent-post__title">Design Studios That Everyone Should Know About?</h4>
                      <p class="widget__recent-post__date">Jan 14, 2020</p>
                    </a>
                  </li>
                  <li class="widget__recent-post__single">
                    <a href="#">
                      <h4 class="widget__recent-post__title">How did we get 1M+ visitors in 30 days without anything!</h4>
                      <p class="widget__recent-post__date">Jan 14, 2020</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--/ .Single Widgets --> */}
              {/* <!-- Single Widgets --> */}
              <div class="widget">
                <h3 class="widget__title">Recent Tweets</h3>
                <ul class="widget__tweets list-unstyled">
                  <li>
                    <a class="widget__tweets__single" href="#">
                      <span>@Smith,</span> FMRP sustains presynaptic function via control of activity-dependent bulk endocytosis
                    </a>
                  </li>
                  <li>
                    <a class="widget__tweets__single" href="#">
                      <span>@Maurice,</span> Contralateral limb specificity for movement preparation in the parietal reach region
                    </a>
                  </li>
                  <li>
                    <a class="widget__tweets__single" href="#">
                      <span>@Stella,</span> Out of rhythm: Compromised precision of theta-gamma coupling impairs associative memory in old age
                    </a>
                  </li>
                  <li>
                    <a class="widget__tweets__single" href="#">
                      <span>@Howard,</span> Specific plasticity loci and their synergism mediate operant conditioning
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--/ .Single Widgets -->
              <!-- Single Widgets --> */}
              <div class="widget">
                <h3 class="widget__title">Categories</h3>
                <div class="widget__category">
                  <ul class="list-unstyled">
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">Neurobiology:</h4>
                        <span>20 posts</span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">Neuropsychology:</h4>
                        <span>07 posts</span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">neuropharmacology:</h4>
                        <span>16 posts</span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">Neurogenetics:</h4>
                        <span>11 posts</span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">Hypocampus:</h4>
                        <span>35 posts</span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-between flex-wrap" href="#">
                        <h4 class="mb-0">Thalamus:</h4>
                        <span>14 posts</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--/ .Single Widgets -->
              <!-- Single Widgets --> */}

    </>
  )
}

export default BlogWidget