import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://16.112.132.235:5000")
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{textAlign:'center', marginTop:'100px'}}>
      <h1>CloudDeployX</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;