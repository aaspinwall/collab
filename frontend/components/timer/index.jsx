import React, { useEffect, useState, createRef } from "react";
import Card from "../ui/card";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

const StyledProgress = styled.div`
  .circular-chart {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    max-height: 250px;
  }
  .circular-bg {
    fill: none;
  }
  .circle {
    fill: none;
    transform-origin: center;
    transition: 1s linear all;
  }
  .percentage {
    font-size: 1.3rem;
    text-anchor: middle;
    fill: ${COLORS.PURPLES.MAIN};
    font-weight: bold;
  }
`;

const Timer = (props, { time, onTimeIsUp }) => {
  const [seconds, setSeconds] = useState(props.time);
  // console.log(props.time)
  const [progress, setProgress] = useState(null);
  const userTime = createRef(null);
  const [offset, setOffset] = useState(0);

  const { size, strokeWidth, circleOneStroke, circleTwoStroke } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // setting progress just in the first render
  useEffect(() => {
    setProgress(seconds);
  }, []);

  useEffect(() => {
    const progressOffset = ((progress - seconds) / progress) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset, seconds]);

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
        // changed onTimeIsUp prop to alert() to avoid error compilation
        alert("time is up!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <StyledProgress>
      <svg className="circular-chart" width={size} height={size}>
        <circle
          className="circular-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <text x={center} y={center} className="percentage">
          {seconds}'s <br />
          remaining!
        </text>
        <circle
          className="circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        ></circle>
      </svg>
    </StyledProgress>
  );
};

export default Timer;
