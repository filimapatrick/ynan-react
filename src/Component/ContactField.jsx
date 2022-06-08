import React from 'react';
import styled from 'styled-components';
import { FaEnvelope,FaPhone,FaMapMarkerAlt} from 'react-icons/fa';

function ContactField() {
  const FieldStyle = styled.div `  
  background-color:var(--bg-3);
  /* padding-left:3rem;
  padding-right:3rem; */
  display:flex;

  .container{
    margin-top:8rem;
    display:grid;
   grid-template-columns:1fr 1fr;
  }

  .info-section{
    padding:5rem;
    color:white;
    background-color:green;
    border-radius:1rem;
   
  }
  hr{
    margin-left:auto;
    margin-right:auto;
  }

  .contact-info-icons{
    display:flex;
    justify-content:center;
    padding-top:2rem;
    padding-bottom:2rem;
  
  }

  .contact-input-session{
    display:flex;
    padding-top:2rem;
    height:5rem;

  }
  .contact-info-icon{
    background-color:brown;
    border-radius:50%;
    color:white;
    padding:1rem;
    height:4rem;
    width:4rem;
    margin-right:3rem;
  }

  h3,h4,h5{
    color:white;
  }

  h5{
    color:green;
  }
  input[type="text"],input[type="email"],input[type="number"],input[type="tel"]{
    border:none;
    border-radius:2rem;
    padding:1rem;
    width:17rem;
    height:4rem;
  }

  input:nth-child(2) {
    margin-left:2rem;
   
}

textarea[type='text']{
width:36rem;
height:20rem;
border-radius:0.5rem;
margin-top: 3rem;
border:none;
padding:3rem;
}

.btn{
  background-color:green;
  color:white;
  margin-top:2rem;
  border-radius:2rem;
 
}

.btn:hover{
  background-color:black;
}

@media  (max-width:960px){
 
  .container{
    display:grid;
   grid-template-columns:1fr;
  }

  .input-section{
   display:grid;
   place-items:center;
   
  }
}
  `
  return (
    <FieldStyle>

  <div className='container'>
     
     <div className='input-section'>
       <h5>contact Us</h5>
       <h2 className='title'>Send Us A Message</h2>
        <p>Search for the keywords to learn more about each warning add  to the line before.</p>
        <div className='contact-input-session'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        </div>

        <textarea type='text' placeholder='Your Message'/>
        <button className='btn'>Submit</button>
        </div>


        



     <div className='info-section'>
       <h3>Get In Touch</h3>
        <p> Search for the keywords to learn more about each warning. Eslint-disable-next-line to the line before.</p>
      
       <hr/>


        <div className='contact-info-icons'>
          <FaEnvelope className='contact-info-icon'/>
          <div className='contact-info-text'>
            <h4>Visit Us:</h4>
            <p> 27th division, Kathmandu, Nepal</p>
            <p>27th division</p>
        </div>

       
        


        
        </div>
        </div>

     </div>
    </FieldStyle>
  )
}

export default ContactField