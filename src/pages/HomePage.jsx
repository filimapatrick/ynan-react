import React from 'react';
import HeroSection from '../Component/HeroSection';
import Event from '../Component/Event';
import Blog from '../Component/Blog';
import Footer from '../Component/Footer';
import GridGallery from '../Component/GridGallery';


function HomePage() {
  return (
    <>
   
<HeroSection />
 <Event/>
 <GridGallery/>
 <Blog/>
<Footer/>
    </>
  )
}

export default HomePage