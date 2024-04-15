// import React from 'react'
import './Content.css';
// import Accordion from './Accordion';
import { Link } from "react-router-dom";
import Extras from './Extras';

import Woman_Hand from './Images/Woman_Hand.mp4';
import schedulepage from './Images/schedulepage.png';
import bills from './Images/bills.png';
import iPad from './Images/iPad.png';
import Macbook from './Images/Macbook.png';
import phone from './Images/phone.png';



export default function Content() {
  return (
    <div className="gallery">
      <body>
    
    <div className="pictures">  
    <p className="intro"> 
    <h1  className="text-content">Effortless appointments, just a click away.</h1>
    <div className="video-container">
    <video className="intro-video" autoPlay muted loop>
              <source src={Woman_Hand} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
 
    <br/>
    <h3 className="text-content1">In today's fast-paced business world,  time is your most valuable asset.  Mhileskee Business Center is committed to  helping you maximize your productivity,  which is why we're excited to unveil our revolutionary online appointment booking system!</h3>
   </p></div>
   
   <div className="Aptbtn">
   <button className="Apt"><Link to="/booking">Book your Appointment Schedule</Link></button>
   </div>
      <br/>
      <br/>
      <br/>


    <div className="otherserv">
      <h2> Other Services</h2>
      <Extras/>
    </div>

    <br/>
      <br/>
      <br/>
      <br/>
      {/* <div className="mockup">  */}
      {/* // <img src={iPad} alt="schedule-mock-up" className="small-device" />
      // <img src={Macbook} alt="schedule-mock-up" className="device-mockup" />
      // <img src={phone} alt="schedule-mock-up" className="phone-device" />  */}
{/* 
      
        <div className="mock-up1">

          <img src={schedulepage} alt="schedule-mock-up" className="schedule-mockup" />
        <div class="overlay">
        <div class="text"> </div>
        </div></div>
             <div className="mock-up2"> 
          <div class="overlay2">
          <div class="text2"><h3 className="text3">&nbsp;&nbsp;&nbsp;&nbsp;Our platform offers a hassle-free booking process that guides <br/> our clients through each step, from selecting services and<br/> choosing preferred dates to confirming appointments.</h3></div>
          </div>  </div>
 
          </div> */}

        
    <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
   

   </body>
   </div>
  );
};