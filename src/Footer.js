import React from 'react';
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import youtube from "./Images/youtube.png";
import './Footer.css';
import { Link } from "react-router-dom";
import twitter from "./Images/twitter.png";
import Newsletter from './Newsletter';




function Footer() {
  return (
    <div className="grid-footer">
         <div className="griditem"><h4 className="text-footer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quick Links</h4> 
         <ul className="link-list">
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/freqaskques">FAQ</Link></li>
            </ul> </div>
         <div className="griditem"><h4 className="text-footer">Stay Connected </h4>
         <a href="https://www.facebook.com"><img src={facebook} alt="fb" className="imgsoc" /></a>
        <a href="https://www.instagram.com"><img src={instagram} alt="ig" className="imgsoc" /></a>
        <a href="https://www.youtube.com"><img src={youtube} alt="youtube" className="imgsoc" /></a>
        <a href="https://twitter.com"><img src={twitter} alt="twitter" className="imgsoc" /></a>

             <br/> <br/><br/>
             </div>
         <div className="griditem"><h4 className="text-footer"> Contact Information </h4> 
         <p className="text-footer1">Contact number: +639 1234 5678 <br/> Contact email: mhileskeebc@yahoo.com<br/>
    Location: Muntinlupa, Philippines</p>
    </div>          
          <div>
          <br/>
            <Newsletter />
          </div>
     <h6 className="copyrights">© 2023 Mhileskee Business Center.All rights reserved.</h6>
  </div>
  
  );
}

export default Footer;
