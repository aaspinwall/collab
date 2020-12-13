import React, { useEffect, useState } from "react";

const Timer = ({ time = 180, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(time);

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
        <span>{seconds}'s remaining!</span>
      </div>
    </div>
  );
};

export default Timer;
