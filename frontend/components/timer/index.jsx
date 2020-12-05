import React, { useEffect, useState } from "react";

const Timer = ({ time = 180, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(time);
  const [userTime, setUserTime] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserTime(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeconds(userTime);
    setUserTime('');
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds >= 1) {
        setSeconds((seconds) => seconds - 1);
      } else if (seconds === 0) {
        onTimeIsUp("time is up!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className='grid'>
      <div className='card'>
        <span>{seconds} s</span>
        <p>Timer component</p>
        <form onSubmit={handleSubmit}>
          <input value={userTime} onChange={handleChange}  type="number" />
          <button type="submit">Set Time</button>
        </form>
      </div>
    </div>
  );
};

export default Timer;
