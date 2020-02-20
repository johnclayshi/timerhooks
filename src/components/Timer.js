import React, { useState, useEffect } from 'react';

import Count from './Count';
import ControlPanel from './ControlPanel';

function Timer() {
    const [timingArray, setTimingArray] = useState([]);
    const [step, setStep] = useState(0);
    const [toggleTimer, setToggleTimer] = useState(true);
    const toggleTimerFunc = () => {
        setToggleTimer(!toggleTimer);
    }
    const addTimeEvent = () => {
        setTimingArray([
            ...timingArray,
            new Date()
        ])
    }
    useEffect(() => {
        let poll = setInterval(() => {
            setStep(step + 1);
        }, 1000);
        return () => clearInterval(poll);
      });
    return (
        <div className="Timer" style={{ display: toggleTimer ? "block" : "none"}}>
            <button onClick={toggleTimerFunc}>Delete Timer</button>
            <Count timingArray={timingArray} />
            <ControlPanel timingArray={timingArray} handleClick={addTimeEvent} />
        </div>
    );
}

export default React.memo(Timer);
