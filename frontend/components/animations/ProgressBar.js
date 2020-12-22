import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledProgressDonut = styled.div`
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
    }
    .percentage {
        font-size: 1.3rem;
        text-anchor: middle;
        fill: #fff;
        font-weight: bold;
    }
`

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);

    return (
        <StyledProgressDonut>
            <svg
                className="circular-chart"
                width={size}
                height={size}
            >
                <circle
                    className="circular-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                ></circle>
                <circle
                    className="circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                >
                </circle>
                <text
                    x={center}
                    y={center}
                    className="percentage"
                >
                    {progress}%
                </text>
            </svg>
        </StyledProgressDonut>
    )
}

export default ProgressBar;