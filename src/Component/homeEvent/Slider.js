import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import styled from 'styled-components';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const SliderStyle= styled.div` 
  
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");


p {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.3;

}

.--text-p {
  font-size: 1rem;
  font-weight: 300;
  color: #333;
}

.btn-slider {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 6px 8px;
  margin: 0 5px 0 0;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: #007bff;
}

.btn-slider:hover {
  transform: translateY(-10px);
}


.btn-slider-block {
  width: 100%;
}

.btn-slider-primary {
  color: #fff;
  background: #007bff;
}

     /* slider style */

  .slider {
  width: 100%;
  height: 40rem;
  position: relative;
  overflow: hidden;
  border: 20px solid red;
  object-fit: contain;
}

.slide {
  position: absolute;
  width: 100%;
  height: 20rem;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
  object-fit: contain;
}

.slide img{
  height: 100%;
  width: 100%;
  
}

/* @media screen and (min-width: 600px) {
  .slide img {
    width: 100%;
    height: 100%;
  }
}

.slide img {
  width: 100%;
  height: 100%;
object-fit: contain;
}

.current {
  opacity: 1;
  transform: translateX(0);
}

.content {
  position: absolute;
  top: 23rem;
  margin-top: -7rem;
  left: 5rem;
  opacity: 0;
  width: 50%;
  color: #fff;
  padding: 2rem;
  padding-bottom: 5rem;
  background: rgba(0, 0, 0, 0.3);
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;
  visibility: hidden;
} */

@keyframes slide-up {
  0% {
    visibility: visible;
    top: 23rem;
  }
  100% {
    visibility: visible;
    top: 17rem;
  }
}

@media screen and (max-width: 600px) {
  .content {
    width: 80%;
  }
}


.current .content {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}

.arrow {
  border: 2px solid green;
  background-color: transparent;
  color: green;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
}
.arrow:hover {
  background-color: #fff;
  color: #777;
}

.next {
  top: 35%;
  right: 1.5rem;
}
.prev {
  top: 35%;
  left: 1.5rem;
}

hr {
  height: 2px;
  background: white;
  width: 50%;
}

  
  `

  return (
    <SliderStyle>
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="btn-slider .btn-sliderprimary">Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
    </SliderStyle>
  );
};

export default Slider;
