import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export const Partners = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    const Container = styled.div` 
    background-color: red;
   
    margin-top: 50px;
    margin-bottom: 50px;

    .partner{
        border: 1px solid black;
        height:15rem;
    }
    `
    return (
        <Container> 
      <div>
      <h2>Partners</h2>
        <Slider {...settings}>
          <div>
            <div className="partner">1</div>
          </div>
          <div>
          <div className="partner">1</div>
          </div>
          <div>
          <div className="partner">1</div>
          </div>
          <div>
          <div className="partner">1</div>
          </div>
          <div>
          <div className="partner">1</div>
          </div>
          <div>
          <div className="partner">1</div>
          </div>
        </Slider>
      </div>
      </Container>
    );
  
}