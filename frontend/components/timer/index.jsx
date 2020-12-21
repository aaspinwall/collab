import React, { useEffect, useState, createRef } from "react";

const Timer = ({ time, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(time || 200);
  const userTime = createRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userTimeElement = userTime.current;
    setSeconds(userTimeElement.value);
    userTimeElement.value = "";
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
    <>
    <div id="specificChart" class="donut-size">
      <div class="pie-wrapper">
        <span class="label">
          <span class="timer-seconds">{seconds}</span><span class="smaller">'s remaining!</span>
        </span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
  </>
  );
};

export default Timer;
