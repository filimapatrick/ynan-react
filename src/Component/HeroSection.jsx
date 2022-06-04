import React from 'react'

function HeroSection() {
  return (
    <>
{/* 
    <!-- Hero Area --> */}
    <div className="welcome-area welcome-area--l1 position-relative bg-default">
      <div className="container">
        <div className="row">
          {/* <!-- Welcome content Area --> */}
          <div className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order- order-lg-1" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div className="welcome-content welcome-content--l1">
              <h1 className="welcome-content__title">
                You are. Welcome to<br/>
                <span className="text-highlight highlight-text d-inline-block"></span>
              </h1>
              <p className="welcome-content__descriptions"> YNAN is an association that provides<br/>  a platform for interaction, <br className="d-none d-xs-block"/>innovation, creativity and career opportunities.
                </p>
            
            
              
            </div>
          </div>

          
          {/* <!--/ .Welcome Content Area -->
         <!--Welcome Image Area --> */}
         <div className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static">
          <div className="welcome-image-group-wrapper">
            <div  className="welcome-image welcome-image--group-01">
              <img src="./7Saf.gif" alt="" className="welcome-image__single welcome-image--group-01__main"/>
             
            </div>
          </div>
        </div>
        {/* <!--/ .Welcome Image Area --> */}
        </div>
      </div>
    </div>
    {/* <!--/ .Hero Area --> */}

    
    </>
  )
}

export default HeroSection