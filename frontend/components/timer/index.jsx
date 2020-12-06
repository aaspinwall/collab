import React, { useEffect, useState, createRef } from "react";

const Timer = ({ time = 180, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(time);
  const userTime = createRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userTimeElement = userTime.current
    setSeconds(userTimeElement.value);
    userTimeElement.value = ''
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
        <span className='timer-seconds'>{seconds} s</span>
        <p>Timer component</p>
        <form onSubmit={handleSubmit}>
          <input ref={userTime} type="number" />
          <button type="submit">Set Time</button>
        </form>
      </div>
    </div>
  );
};

export default Timer;
