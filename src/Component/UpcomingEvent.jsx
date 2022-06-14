import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import E1 from '../image/HomeEvents/E1.jpg';
import E2 from '../image/HomeEvents/E2.jpg';
import E3 from '../image/HomeEvents/E3.jpg';
import E4 from '../image/HomeEvents/E3.jpg';

function UpcomingEvent() {
const EventStyle = styled.div  ` 
position: relative;
padding-left: 4rem;
padding-right: 4rem;
.upcoming{
    display: block;
  width: 100%;
  height: 40rem;
  position: relative;
  padding-top:2rem;
  padding-bottom:2rem;
}

.upcoming img{
    height:100%;
    width:100%;
    object-fit: fill;
    /* z-index: -1;
    position: absolute; */
}

.overlay {
  position: absolute;
  margin-top: -30rem;
  left: 5rem;
  opacity: 1;
  width: 15rem;
  color: #fff;
  padding: 2rem;
  padding-bottom: 5rem;
  background: rgba(0, 0, 0, 0.3);
  animation: overlay 2s ease 0.5s;
  animation-fill-mode: forwards;
  align-items:center;
  &:hover {
    opacity: 1;
}


}



.event-btn{
  padding:.7rem;
  color:white;
  background-color:green;
  border-radius:25px;
  border:none;
  outline:none;
  &:hover{
    color:white;
    background-color:black;
  }
}



`

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <EventStyle>
        <h2>Up Coming Events</h2>
        <Slider {...settings}>
          <div className='upcoming'>
          <img src={E1} alt=""/>
          <div class="overlay">
          
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>


          <div className='upcoming'>
            <img src={E2} alt=""/>
          <div class="overlay">
           
          
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>


          <div className='upcoming' >
          <img src={E3} alt=""/>
          <div class="overlay">
           
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>


          <div className='upcoming'>
          <img src={E4} alt=""/>
          <div class="overlay">
           
           
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>


          <div className='upcoming'>
          <img src={E1} alt=""/>
          <div class="overlay">
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>


          <div className='upcoming'>
          <img src={E2} alt=""/>
          <div class="overlay">
           
          <div className="content-btn-group mt-4">
                <a className="btn btn--lg-3 btn-primary me-3 text-white shadow--primary-2 rounded-50 me-3 popup-btn mb-3" href="https://www.youtube.com/watch?v=LWZ7iytIA6k">Learn More</a>
                {/* <!-- <a className="btn btn--lg-3 btn-electric-violet-2 shadow--electric-violet-2-2 rounded-50 me-3 text-white mb-3" href="#">Get Started</a> --> */}
              </div>
          </div>
          </div>
        </Slider>
     


    </EventStyle>
  )
}

export default UpcomingEvent