import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';


const FooterStyle = styled.div`
  background-color:rgb(243,244,246);
  padding-top: 5rem;
  border-top: 5px solid rgb(255,255,255);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  img{
    height:5rem;
    width:4rem;
    padding-bottom: 1rem;
  }
  
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function FooterFour() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <img src='./ynan.png' alt='logo' />
          <p>
          YNAN is an association that provides
a platform for interaction,
innovation, creativity and career opportunities.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'blog',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+234 803-898-9086',
                path: 'tel:+88012312',
              },
              {
                title: 'chinnaOrish@gmail.com',
                path: 'mailto:chinnaorish@gmail.com',
              },
              {
                title: 'Port-Harcourt, Nigeria, University Of PortHarcourt',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://web.facebook.com/search/top?q=youth%20neuroscience%20association%20of%20nigeria%20-%20ynan',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
     
    </FooterStyle>
  );
}


// import React from 'react';
// import styled from 'styled-components'

// function FooterFour() {
//     const FooterStyle = styled.div ` 
//     background-color: rgb(243,244,246);
//     position:relative;
    
//     .footer{
//         display:flex;
//         justify-content:space-evenly;
//         padding-top:4rem;
//     }

//     .footer-content{
//         background-color:green;
//         height:10rem;
//         width:22rem;
//     }
//     `
//   return (
//     <FooterStyle>
//       <div className='footer'>
//        <div className='general'>
//        <h3> YNAN</h3>
//        <div className='footer-content'>

//        </div>
//        </div>


//        <div className='contact'>
//        <h3> contact</h3>
//        <div className='footer-content'>
        
//        </div>
//        </div>

//        <div className='address'>
// <h3>Address</h3>
// <div className='footer-content'>
        
//        </div>
//        </div>
//       </div>
//     </FooterStyle>
//   )
// }

// export default FooterFour
