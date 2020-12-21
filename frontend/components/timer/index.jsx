import React, { useEffect, useState, createRef } from "react";
import styled from "styled-components";

const StyledProgress = styled.div`
  .donut-size {
    font-size: 12em;

    .pie-wrapper {
      position: relative;
      width: 1em;
      height: 1em;
      margin: 0px auto;
     
      .half-circle {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border: 0.1em solid hsl(168, 76%absolute, 42%);
        border-radius: 50%;
       
      }
      .right-side {
        transform: rotate(180deg);
      }
      .label {
        position: absolute;
        top: 0.52em;
        right: 0.4em;
        bottom: 0.4em;
        left: 0.4em;
        display: block;
        background: none;
        border-radius: 50%;
        color: #7F8C8D;
        font-size: 0.25em;
        line-height: 2.6em;
        text-align: center;
        cursor: default;
        z-index: 2;
      }
      .smaller {
        padding-bottom: 20px;
        color: #BDC3C7;
        font-size: .45em;
        vertical-align: super;
      }
      .shadow {
        width: 100%;
        height: 100%;
        border: 0.1em solid #BDC3C7;
        border-radius: 50%;
      }
    }
    .progress {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border: 0.1em solid orange;
        border-radius: 50%;
        clip: rect(0, 1em, 1em, 0.5em);
    }
  }
`

const Timer = ({ time, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(time || 200);
  const userTime = createRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userTimeElement = userTime.current;
    setSeconds(userTimeElement.value);
    userTimeElement.value = "";
  };

  const updateDonutChart = (el, percent, donut) => {
    percent = Math.round(percent);
    if(percent > 100) {
      percent > 100;
    }
    else if (percent < 0){
      percent = 0;
    }
    let deg = Math.round(360 * (percent / 100));
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds >= 1) {
        setSeconds((seconds) => seconds - 1);
      } else if (seconds === 0) {
        alert("time is up!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <StyledProgress>
    <div id="specificChart" className="donut-size">
      <div className="pie-wrapper">
        <span className="label">
          <span className="timer-seconds">{seconds}</span><span className="smaller">'s remaining!</span>
        </span>
        <div className="pie">
          <div className="left-side half-circle"></div>
          <div className="right-side half-circle progress"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  </StyledProgress>
  );
};

export default Timer;
