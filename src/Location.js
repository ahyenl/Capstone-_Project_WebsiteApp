import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Location.css';
import Navbar from './Navbar';



export default function Location() {
  return (
        <div className="destination">
        <Header />
        <Navbar/>

        <body><br/>
        <h1 className="text-content">Visit Us</h1>
        <div className="location-container">
          <div className="location-item">
            <h3>Muntinlupa City Office</h3>
            <p className="para-about1">
              <strong>Address:</strong> Muntinlupa City, Philippines
            </p>
            <p className="para-about1">
              <strong>Phone:</strong> +639 1234 5678
            </p>
            <p className="para-about1">
              <strong>Email:</strong> <a href="mailto:info@mhileskee.co.nz">mhileskeebc@yahoo.com</a>
            </p>
            <p className="para-about1">
              <strong>Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM
            </p>
          
        <iframe title="Mhileskee Business Center"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123658.55881311791!2d121.04146673520079!3d14.408132703876282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d02cc7b1e345%3A0x51fdbee47cdaf013!2sMuntinlupa%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2snz!4v1709977387447!5m2!1sen!2snz" 
         width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
   
</div>
        </div>
      </body> <br/><br/>
      <Footer />
    </div>
  );
};

