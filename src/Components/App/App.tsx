import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';

const appName = '<Timer App />'

function App() {
  return (
    <div className="app-container">
       <h1 className='head'>{appName}</h1>
      <Timer />
    </div>
  );
}

export default App;
