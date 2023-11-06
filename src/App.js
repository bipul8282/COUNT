import React, { useState, useEffect } from 'react';
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated: ', count);
  }, [count]);

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button className="add-button" onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
