import React, { useEffect, useState, useCallback } from 'react';
import Child from './Child';

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const countNumber = useCallback(() => {
        return count + step;
    }, [count, step]);


    const handleSetStep = () => {
        setStep(step + 1);
        setCount(count + step);
    }

    return (
        <div>
            <button onClick={handleSetStep}>set step is : {step} count is : {count}</button>
            <Child countNumber={countNumber}/>
        </div>
    );
}