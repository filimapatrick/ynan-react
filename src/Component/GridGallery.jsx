import React from 'react';
import styled from 'styled-components';

import A6 from '../image/Brain-Awareness-Week/Bawarenes10.jpg'
import A7 from '../image/Autism/Autism1.jpg';
import A8 from '../image/Brain-Awareness-Week/Bawarenes11.jpg';
import A9 from '../image/pamo/pamo5.jpg';
import A10 from '../image/Brain-Awareness-Week/Bawarenes4.jpg';
import A11 from '../image/Brain-Awareness-Week/Bawarenes5.jpg';
import A12 from '../image/Brain-Awareness-Week/Bawarenes6.jpg';
import A13 from '../image/Brain-Awareness-Week/Bawareness7.jpg';
import A14 from '../image/pamo/pamo1.jpg';
import A15 from '../image/perfusion/perfusion1.jpg';

function GridGallery() {
  const GalleryStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Source+Sans+Pro:200,300,400,600');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 padding-top: 5rem;
 padding-bottom: 5rem;
  overflow: hidden;

  h1 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 22px;
  color: #151E3F;
  font-weight: 300;
  letter-spacing: 2px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
    flex-wrap: wrap;
  > * {
    margin: 5px;
  }
}

.media {
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  img {
      max-width: 100%;
      height: auto;
      object-fit: fill;
    }
}

.layer {
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 90%;
  background: #FFF;
  color: #151E3F;
  transition: all 0.9s ease;
  p {
    transition: all 0.9s ease;
    transform: scale(0.1)
  }
}

p {
  font-family: 'Inconsolata', monospace;
  text-align: center;
  font-size: 15px;
  letter-spacing:1px;
}

.media:hover .layer {
  opacity: 0.8;
  width: 90%;
  transition: all 0.5s ease;
  p {
    transform: scale(1);
    transition: all 0.9s ease;
  }
}

@media width and  (max-width: 800px){
  body {
    transform: scale(0.6);
  }
  margin-top: 2rem;
  padding-left: 3rem;
}


@media width and (max-width: 600px) {
    .wrapper {
    display: block;
    > * {
      margin: 10px;
    }
  }

  .media {
  width: 500px;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
      max-width: 100%;
      height: 100%;
      object-fit:contain;
    }
}

}


  `;
  return (
    <GalleryStyle>
      
     
<div class="wrapper">
  
<div class="media">
<div class="layer">
    <p>+ Paul Gilmore</p>
  </div>
  <img src={A6} alt="" />
</div>


 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>
  <img src={A7} alt="" />
</div>

 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>
  <img src={A8} alt="" />
</div>


 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>

  <img src={A9} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>

  <img src={A10} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>

  <img src={A11} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>

  <img src={A12} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>

  <img src={A13} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ M. O' Neil</p>
  </div>
<img src={A14} alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>+ N. Mehta</p>
  </div>
<img src={A15} alt="" />
</div>
</div>
      </GalleryStyle>
  )
}

export default GridGallery