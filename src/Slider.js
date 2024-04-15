import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import the CSS file
import appointment from './Images/appointment.jpg';
import shadow from './Images/shadow.jpg';
import calendar from './Images/calendar.jpg';

const images = [
  { src: appointment , alt: 'appointment' },
  { src: shadow , alt: 'shadow' },
  { src: calendar , alt: 'calendar' },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, []); 
  //  [images.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      {/* Slides */}
    {images.map((image, index) => (
  <div
    key={index}
    className={`slides ${currentSlide === index ? 'active' : ''}`}
  >
    <div className="numbertext">{`${index + 1} / ${images.length}`}</div>
    {currentSlide === index && ( // Only render the image if it's the current slide
    <img className="carousel-img" src={image.src} alt={image.alt} />
    )}
    {/* <div className="text">{image.alt}</div> */}
  </div>
))}


      {/* Dots */}
      <div style={{ textAlign: 'center' }}>
        {images.map((image, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
