import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Booking.css';
// import { Link } from "react-router-dom";
import Apptform from './Apptform';
// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
import Slider from './Slider';



export default function Booking() {
  return (
    <div className="book-tour">
        <Header />
        <Navbar />
      <body>
      <br /> <br /> 
        <Slider />
      <h3>Why Book Appointments?</h3>
            <p className="para-about1">1.Save Time: Skip the wait and schedule your space directly through our user-friendly online system. It's quick, convenient, and accessible 24/7.</p>
            <p className="para-about1">2.Enhanced Flexibility: Book appointments at your convenience, whether it's during regular business hours or outside of them (depending on availability).</p>
            <p className="para-about1">3.Guaranteed Availability: Secure your preferred space in advance and avoid any scheduling conflicts. Focus on your work knowing your meeting room or office is ready for you.</p>
            <p className="para-about1">4.Improved Efficiency: Streamline your workflow by booking appointments directly through the system. No need for calls or emails; manage your space reservations effortlessly.</p>
       
    <table className="book-payment" >
      
    <tr>  
  
        <hr></hr>
        <th><Apptform /></th>
        
       
      <br /> <hr></hr>
        
       </tr>
       
   </table><br/><br/>
   <h3 className="para-about1">REMINDER
          Always bring a copy of your latest bill when making a payment at our branch.</h3>
   </body><br/>
   <Footer />
   </div>
  );
}
