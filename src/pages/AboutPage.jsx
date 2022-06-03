import React from 'react'
import ImageSlider from '../Component/AboutSlider/Slider'
import AboutStory from '../Component/AboutStory'
import AboutSummary from '../Component/AboutSummary'
// import AboutTeam from '../Component/AboutTeam'
import AboutVision from '../Component/AboutVision'
import FooterTwo from '../Component/FooterTwo'
import { Partners } from '../Component/Partners'

function AboutPage() {
  return (
    <>
<AboutSummary/>
<AboutStory/>
<AboutVision/>
<ImageSlider/>
<Partners/>
{/* <AboutTeam/> */}
<FooterTwo/>
    </>
  )
}

export default AboutPage