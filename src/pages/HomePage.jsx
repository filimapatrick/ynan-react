import React from 'react';
import HeroSection from '../Component/HeroSection';
// import Event from '../Component/Event';
import Blog from '../Component/Blog';
import Footer from '../Component/Footer';
import GridGallery from '../Component/GridGallery';
import Lecturers from '../Component/Lecturers';
import Slider from '../Component/homeEvent/Slider';


function HomePage() {
  return (
    <>
   
<HeroSection />
<Slider/>
 {/* <Event/> */}
 <GridGallery/>
 <Lecturers/>
 <Blog/>
<Footer/>
    </>
  )
}

export default HomePage