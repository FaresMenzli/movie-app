import React from 'react';

import './App.css';
import Example from './Component/Modal' ;

function App() {
 
  return (
    <div className="App">
      <header style={{ 
          fontWeight:700,
          fontSize:"20px",
          backgroundColor: "RGB(234,172,157)",
          paddingBottom: "20px",
          color: "white",
          paddingTop: "20px",
          marginBottom: "40px",}}>Movie App</header>
    <Example></Example>
    </div>
    )
  
}

export default App;
