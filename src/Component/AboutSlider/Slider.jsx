import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Orish from '../../image/Lecturers/Orish.jpeg';
import amadi from '../../image/Lecturers/prof-amadi.jpg';
import patron1 from '../../image/Lecturers/patron1.jpg';
import patron2 from '../../image/Lecturers/patron2.jpeg';
import patron3 from '../../image/Lecturers/patron3.jpg';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
      

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    }

    const AboutSlider = styled.div ` 
    
  
  .slider_title {
    font-size: 3vw;
    color: black;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2vw;
    font-weight: 400;
  }
  
  .card-wrapper {
    position: relative;
    width: 100%;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  .card-wrapper:active, .card-wrapper:hover, .card-wrapper:focus {
    outline: none;
    border: none;
  }
  
  .card {
    width: 100%;
    height: 450px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
  }
  
  .card .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000;
    -webkit-transition: .5s;
    transition: .5s;
  }
  
  .card .card-image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
  
  .card:hover img {
    opacity: .4;
    -webkit-transition: .5s;
    transition: .5s;
  }
  
  .card:hover .card-image {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
    -webkit-transition: all .9s;
    transition: all .9s;
  }
  
  .social-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  
  .social-icons li {
    list-style: none;
  }
  
  .social-icons li a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #fff;
    font-size: 23px;
    color: #333;
    font-weight: bold;
    margin: 0 6px;
    -webkit-transition: .4s;
    transition: .4s;
    -webkit-transform: translateY(200px);
            transform: translateY(200px);
    opacity: 0;
  }
  
  .card:hover .social-icons li a {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    opacity: 1;
  }
  
  .social-icons li a:hover {
    background: #000;
    -webkit-transition: .2s;
    transition: .2s;
  }
  
  .social-icons li a:hover .fa {
    color: #fff;
  }
  
  .social-icons li a .fa {
    -webkit-transition: .8s;
    transition: .8s;
  }
  
  .social-icons li a .fa:hover {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
    color: #fff;
  }
  
  .card:hover li:nth-child(1) a {
    -webkit-transition-delay: .1s;
            transition-delay: .1s;
  }
  
  .card:hover li:nth-child(2) a {
    -webkit-transition-delay: .2s;
            transition-delay: .2s;
  }
  
  .card:hover li:nth-child(3) a {
    -webkit-transition-delay: .3s;
            transition-delay: .3s;
  }
  
  .card:hover li:nth-child(4) a {
    -webkit-transition-delay: .4s;
            transition-delay: .4s;
  }
  
  .details {
    position: absolute;
    bottom: 400px;
    left: 0;
    background: #fff;
    width: 100%;
    height: 120px;
    z-index: 1;
    padding: 10px;
    -webkit-transition: .6s;
    transition: .6s;
  }
  
  .details h2 {
    margin: 30px 0;
    padding: 0;
    text-align: center;
  }
  
  .details h2 .job-title {
    font-size: 16px;
    line-height: 2;
    color: #333;
    font-weight: 300;
    display: block;
  }
  
  .card:hover .details {
    bottom: 0;
  }
  
  .carousel .slick-dots {
    bottom: -2.5vw;
  }
  
  .carousel .slick-dots li button {
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
  
  .carousel .slick-dots li button:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    content: "";
    text-align: center;
    opacity: .5;
    color: #000;
    background-color: #fff;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  
  .carousel .slick-dots li.slick-active button, .carousel .slick-dots li:hover button {
    border-color: tomato;
  }
  
  .carousel .slick-dots li.slick-active button:before, .carousel .slick-dots li:hover button:before {
    background-color: tomato;
    opacity: 1;
  }
  
  .carousel .slick-prev, .carousel .slick-next {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
  
  .carousel .slick-prev:hover, .carousel .slick-prev:focus, .carousel .slick-next:hover, .carousel .slick-next:focus {
    color: #fff;
    outline: none;
    background: #fff;
  }
  
  .carousel .slick-prev:before, .carousel .slick-next:before {
    color: #000;
    font-family: "Raleway", sans-serif;
  }
  
  .carousel .slick-next {
    right: -55px;
  }
  
  .carousel .slick-prev {
    left: -55px;
  }
    `
    return (

        <AboutSlider>
             <div className="slider_title">Mind Behind YNAN</div>
        <Slider {...settings}>
          
            {/* <div className="card-wrapper">
           
                <div className="card">
                    <div className="card-image">
                        <img src="images/Lekpa.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>David Lekpa <span className="job-title">Lecturer</span></h2>
                    </div>
                </div>
            </div> */}
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Orish} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr.Mrs.Orish <span className="job-title">Founder</span></h2>
                    </div>
                </div>
            </div>


            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={amadi} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr.Amadi <span className="job-title">Co-Founder</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={patron1} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2> Prof  Danjuma <span className="job-title">Grand Patron/President Of NSN</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={patron2} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Prof.Olopade <span className="job-title">Grand Patron/President Of Sona</span></h2>
                    </div>
                </div>
            </div>


            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={patron3} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr.Mahmoud Bukar <span className="job-title"> Patron</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        </AboutSlider>
    )
}

export default ImageSlider