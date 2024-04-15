import React, { useState } from 'react';
import './Accordion.css';

function ToggleText() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleText = (toggleNumber) => {
    if (toggleNumber === 1) {
      setIsVisible1(true);
      setIsVisible2(false);
      setIsVisible3(false);
    } else if (toggleNumber === 2) {
      setIsVisible1(false);
      setIsVisible2(true);
      setIsVisible3(false);
    } else if (toggleNumber === 3) {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(true);
    }
  };

  return (
    <div className="btntgl">
      <button onClick={() => toggleText(1)}>HOW DO I BOOK AN APPOINTMENT? </button>
      {isVisible1 && <p className="ans"> Visit our website and navigate to the "Book Now" section. Choose your desired service, date, time, location (if applicable), and any additional details. 
Confirm your booking and you'll receive a confirmation email.</p>}<br/><hr/>
      <button  onClick={() => toggleText(2)}>CAN I BOOK APPOINTMENTS OVER THE PHONE OR EMAIL?</button>
      {isVisible2 && <p className="ans">   Yes, while we encourage the convenience of online booking, you can still book appointments by phone or email.  Our contact information is readily 
available on the  website.</p>}<br/><hr/>
      <button onClick={() => toggleText(3)}>WHAT ARE THE FEES INVOLVED IN PROCESSING THE PAYMENT?</button>
      {isVisible3 && <p className="ans">There are two (2) fees placed on top of your bill amount. <br/><br/> These are as follows:
        Biller Service Fee: Refers to the service fee charged by MBC per transaction.<br/>
       Convenience Fee: Refers to the issuing bank's fee to process the payment transaction.</p>}

      
      
    </div>
  );
}

export default ToggleText;
