import React,{useState,useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

function HeroSection() {
  const [currentWord, setCurrentWord] = useState({
    word: 'Neuroscience',
    currentIndex: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 300
    })
    const words = [
      'TO YNAN',
      ' TO UNIPORT &<br /> OUR HOME',
      'TO YNAN &<br /> OUR SITE',
      // 'Healthcare <br /> Providers',
      // 'Government <br />Facilities',
    ];
    // Function that executes every 2000 milliseconds
    const interval = setInterval(function () {
      setCurrentWord(prev => ({
        ...prev,
        word: words[prev.currentIndex],
        currentIndex:
          prev.currentIndex === words.length - 1 ? 0 : prev.currentIndex + 1,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
              <h3 className="welcome-content__title">
                You are. Welcome<br/></h3>
                <span className="text-highlight highlight-text d-inline-block"  >
                <h1 data-aos="zoom-out-up" style={{color:'green'}}>
               
                {currentWord.word.split('<br />').map((word, index) => (
                  <>
                    <span
                      key={word}
                      className={`animated ${index === 1 ? 'fadeInUp' : 'fadeInDown'
                        }`}
                    >
                      {word}
                    </span>{' '}
                  </>
                ))}
                <br />
              
              </h1>
                </span>
              {/* </h1> */}
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