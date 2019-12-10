import React, { useState, } from 'react';
import Child from './Child';
import ChildMemo from './Child-memo';

export default (props = {}) => {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const handleSetStep = () => {
        setStep(step + 1);
    }

    const handleSetCount = () => {
        setCount(count + 1);
    }

    const handleCalNumber = () => {
        setNumber(count + step);
    }


    return (
        <div>
            <button onClick={handleSetStep}>step is : {step} </button>
            <button onClick={handleSetCount}>count is : {count} </button>
            <button onClick={handleCalNumber}>numberis : {number} </button>
            <hr />
            <Child step={step} count={count} number={number} /> <hr />
            <ChildMemo step={step} count={count} number={number} />
        </div>
    );
}