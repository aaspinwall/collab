import React, { useEffect, useState } from 'react';

export const Timer = ({ time = 180 }) => {
    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        let interval = setInterval(() => {
            if(seconds >= 1){
                setSeconds(seconds => seconds - 1)
            }
            else if(seconds === 0){
                alert("Time is over!")
                clearInterval(interval)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds])

    return(
        <div className="grid">
            <div className="card">
                <span>{seconds} s</span>
                <p>Timer component</p>
            </div>
        </div>
    );
};