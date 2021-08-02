import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [timer, setTimer] = useState({
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
  });

  const now = new Date().getTime();
  const chooseTime = new Date('2021-08-03').getTime();
  const gap = chooseTime - now;

  const day = Math.floor((gap/ 1000 / 60 / 60 / 24) % 24);
  const hour = Math.floor((gap / 1000 / 60 / 60) % 60);
  const minute = Math.floor((gap / 1000 / 60) % 60);
  const second = Math.floor((gap/ 1000) % 60);


  useEffect(() => {
    setInterval( activeSetTimer, 1000);
  }, [timer])

  const activeSetTimer = () => {
    setTimer({
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    });
  }

  return (
    <div className="App">
      <div className='container'>
        <span>
          {day} Days
        </span>

        <span>
          {hour} hours
        </span>

        <span>
          {minute} minutes
        </span>

        <span>
          {second} seconds
        </span>
      </div>
    </div>
  );
}

export default App;
