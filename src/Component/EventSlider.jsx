import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import E1 from '../image/HomeEvents/E1.jpg';
import E2 from '../image/HomeEvents/E2.jpg';
import E3 from '../image/HomeEvents/E3.jpg';
import E4 from '../image/HomeEvents/E4.jpg';



function EventSlider() {
    const EventStyle = styled.div ` 

    .event{
        height:60rem;
        width:100%;
        margin-bottom:10rem;
        width:10rem;
        z-index:1;
    }

    .event img{
        height:100%;
        width:100%;
        object-fit:fill;
    }
    
  .content{
      position:relative;
      background-color:red;
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
  
        <Slider {...settings}>
          <div className='event'>
            <img src={E1}/>
           
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
     


          <div className='event'>
          <img src={E2}/>
          <div className='content'>
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
          </div>


          <div className='event'>
          <img src={E3}/>
          <div className='content'>
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
         
          </div>


          <div className='event'>
          <img src={E4}/>
          <div className='content'>
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
          </div>


          <div className='event'>
          <img src={E1}/>
          <div className='content'>
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
          </div>


          <div className='event'>
          <img src={E2}/>
          <div className='content'>
              <p>rc/Component/EventSlider.jsx
  Line 45:13:  img elements must have an alt prop, either with meaningful </p>
  <hr />
              <button>Register</button>
          </div>
          </div>
        </Slider>
    </EventStyle>
  )
}

export default EventSlider