import React,{useState} from 'react';
import styled from 'styled-components';
// import Title from '../components/Title'
import PrimaryButton from './PrimaryButton';
import {MainLayout, InnerLayout} from './Layouts'

import { MdOutlineLocationOn,MdEmail,MdPhone } from 'react-icons/md';
import ContactItem from './ContactItem';
import {db} from '../Config'

function ContactForm() {
    const phone = <MdOutlineLocationOn />
    const emailemoji = <MdEmail />
    const location = <MdPhone  />



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };



    return (
      <>
         <MainLayout>
 
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form  className="form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text"
                             id="name"                 
                            value={name}
                             onChange={(e) => setName(e.target.value)}
                             required
                              />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email"
                             id="email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             required
                              />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject"  required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" 
                            id="textarea" 
                            cols="30" 
                            rows="10"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            >

                            </textarea>
                        </div>
                        {/* <button
        type="submit"
        style={{ background: loader ? ('red') : ('blue') }}
        className="button"
      >
        Submit
      </button> */}
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+66-789675637'} cont2={'07663520283'} />
                    <ContactItem title={'Email'} icon={emailemoji} cont1={'loremipsum@gmail.com'} cont2={'info.lorem.ipsum@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'27 Aldrich Road, London, England'} cont2={'United Kingdom'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
        
        </>
    )
}

const ContactPageStyled = styled.section`


    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: green;
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    /* background-color: green; */
                    padding: 0 .5rem;
                    color: inherit;
                    margin-top: -5rem;
                }
                input{
                    border: 1px solid green;
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid green;
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    
                }
            }
            
        }
    }
`;

export default ContactForm

