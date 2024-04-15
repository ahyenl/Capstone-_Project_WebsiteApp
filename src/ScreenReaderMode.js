import React, { useState } from 'react';

const ScreenReaderMode = ({ children }) => {
  const [reading, setReading] = useState(false);

  const toggleReading = () => {
    setReading(prevReading => !prevReading);
  };

  const startReading = () => {
    // Add your logic to start reading the content
    console.log('Start reading...');
  };

  const stopReading = () => {
    // Add your logic to stop reading the content
    console.log('Stop reading...');
  };

  return (
    <div>
      {reading ? (
        <button onClick={stopReading}>Stop Screen Reader</button>
      ) : (
        <button onClick={startReading}>Start Screen Reader</button>
      )}
      <button onClick={toggleReading}>Toggle Screen Reader</button>
      {children}
    </div>
  );
};

export default ScreenReaderMode;
