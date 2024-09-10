import React, { useState, useEffect } from 'react';

function SpacebarCounter() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        setCount((prevCount) => prevCount + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Spacebar Counter</h1>
      <p>Press the spacebar to increase the count:</p>
      <h2>{count}</h2>
    </div>
  );
}

export default SpacebarCounter;
