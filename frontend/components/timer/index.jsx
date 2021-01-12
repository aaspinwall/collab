import React, { useEffect, useState, createRef } from "react";
import { useInterval } from "../../utilities/hooks";
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

const Timer = ({ time, onTimeIsUp, ...props }) => {
  const oneMillisecond = 1000;
  const timeLimit = time;
  const diffInMilliseconds = timeLimit - Date.now();

  const [canVote, setCanVote] = useState(true);
  const [seconds, setSeconds] = useState(diffInMilliseconds / oneMillisecond);
  const [progress, setProgress] = useState(null);
  const userTime = createRef(null);
  const [offset, setOffset] = useState(0);

  const { size, strokeWidth, circleOneStroke, circleTwoStroke } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // setting progress just in the first render
  useEffect(() => {
    if (diffInMilliseconds <= 0) {
      onTimeIsUp(true);
    }
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

  const refresh = () => {
    if (canVote) {
      const diffInSeconds = (timeLimit - Date.now()) / oneMillisecond;
      if (seconds <= 0) {
        setCanVote(false);
        setSeconds(0);
      } else {
        setSeconds(diffInSeconds);
      }
    }
  };

  useInterval(() => {
    // Your custom logic here
    if (canVote) {
      refresh();
    } else {
      onTimeIsUp("TIME IS UP!");
    }
  }, 1000);

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
          {Math.floor(seconds)}'s <br />
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
