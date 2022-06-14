import React from 'react';
import HeroSection from '../Component/HeroSection';
// import Event from '../Component/Event';
import Blog from '../Component/Blog';
import Footer from '../Component/Footer';
import GridGallery from '../Component/GridGallery';
import Lecturers from '../Component/Lecturers';
import Slider from '../Component/homeEvent/Slider';
import UpcomingEvent from '../Component/UpcomingEvent';



function HomePage() {
  return (
    <>
   
<HeroSection />
{/* <Slider/> */}
 {/* <Event/> */}
 <UpcomingEvent/>
 <GridGallery/>
 <Lecturers/>
 <Blog/>
<Footer/>
    </>
  )
}

export default HomePage