import React,  { useState } from 'react';
import './Apptform.css';

const AppointmentBookingForm = () => {
  // Consider using a loading state indicator while the iframe is loading
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="appointment-booking-form">
      {/* Display loading message or indicator while iframe is loading */}
      {isLoading && (
        <p className="para-about1">Loading appointment booking form...</p>
      )}

      <iframe title="Appointment Booking Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdgxXG_ffIORCiKasZ5Pu7b0dizJF5BDzAQ9c6ct9waAF5yUw/viewform?embedded=true"
         width="600" height="2050" frameborder="0" marginheight="0" marginwidth="0"   onLoad={handleIframeLoad}>Loading…"
   
      </iframe>
    </div>
  );
};

export default AppointmentBookingForm;
