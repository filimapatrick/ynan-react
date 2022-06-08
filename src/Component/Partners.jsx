import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import BWI from '../image/partners/BWI.jpeg';
import Enc from '../image/partners/Enc.jpeg';
import Esp from '../image/partners/Esp.jpeg';


export const Partners = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    const Container = styled.div` 
 
    margin-top: 50px;
    margin-bottom: 50px;
   
    outline:none;

    .partner{
        border: 1px solid black;
        height:15rem;
        border:none;
    }

    .partner img{
      object-fit:contain;
      height:100%;
      width:100%;
    }

    h2{
      text-align:center;
    }
    `
    return (
        <Container> 
    
      <h2>Partners</h2>
        <Slider {...settings}>
          
            <div className="partner" >
              <img src={BWI} alt=''/>
            </div>


            <div className="partner" >
              <img src={Enc} alt=''/>
            </div>

            <div className="partner" >
              <img src={Esp} alt=''/>
            </div>

            <div className="partner" >
              <img src={BWI} alt=''/>
            </div>

            <div className="partner" >
              <img src={Enc} alt=''/>
            </div>
          <div>
         
         
          </div>
        </Slider>



    
      </Container>
    );
  
}