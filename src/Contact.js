import React, { useState } from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import youtube from "./Images/youtube.png";
import Form from "./Form";
import Navbar from './Navbar';
import twitter from "./Images/twitter.png";


export default function Contact() {
  
  return (
    <div className="customer-care">
      <Header />
      <Navbar/>
      <body>
        <br/>
        <h2 className="text-content">Mhileskee Business Center Customer Care</h2>
        <p className="para-about1">How can we help you today?</p>
        <p className="para-about1">
          If you have an inquiry or would like to share your experience with us,
          we're here to help. Please contact us using one of the following methods:
        </p>
        <h3 className="text-content">Email Us</h3>
        <p className="para-about1">For a booking enquiry, please enter your booking reference number in the Reference field.</p>
        <br/>
      <Form />
        <h3 className="text-content">Call Us</h3>
        <p className="para-about1">We'd love to hear from you. Please call us on 600 000000</p>
        <p className="para-about1">
          Our customer support team is available between 08:00 AM - 05:00 PM - 5 days a week.
        </p>
        <h3 className="text-content">Say Hello On Our Social Platforms</h3>
        <p className="para-about1">Follow us!</p>
        <div className="logos">
        <a href="https://www.facebook.com"><img src={facebook} alt="fb" /></a>
        <a href="https://www.instagram.com"><img src={instagram} alt="ig" /></a>
        <a href="https://www.youtube.com"><img src={youtube} alt="youtube" /></a>
        <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>

        </div>
        <p className="para-about1">Keep in touch with us!!!</p>
      </body>
      <Footer />
    </div>
  );
}


