import React, { useState } from 'react';
import App from './App';


const ReaderMode = () => {
  const [content, setContent] = useState('');
  const [reading, setReading] = useState(false);

  // Function to start reading the content
  const startReading = () => {
    setReading(true);
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(utterance);
    utterance.onend = () => setReading(false); // Set reading state to false when speech ends
  };

  // Function to stop reading the content
  const stopReading = () => {
    window.speechSynthesis.cancel();
    setReading(false);
  };

  // Function to extract text content from a webpage
  const extractTextContent = () => {
    const textContent = document.body.innerText;
    setContent(textContent);
  };

  return (
    <div>
      <h1>Reader Mode</h1>
      {reading ? (
        <button onClick={stopReading}>Stop Reading</button>
      ) : (
        <button onClick={startReading}>Start Reading</button>
      )}
      <button onClick={extractTextContent}>Extract Content</button>
      <div>{content}<App/></div>
    </div>
  );
};

export default ReaderMode;
