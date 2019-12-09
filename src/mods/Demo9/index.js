import React, { useEffect, useState, useCallback, useRef } from 'react';

const useCountNumber = (count, step) => {
    return useCallback(() => {
        return `number1 : ${count + step}`;
    }, [count, step]);
}

const useCountNumber2 = (count, step) => {
    const countRef = useRef(null);
    const stepRef = useRef(null);

    useEffect(() => {
        countRef.current = count;
        stepRef.current = step;
    });

    return useCallback(() => {
        return `number2 : ${countRef.current + stepRef.current}`;
    }, [countRef, stepRef]);

}

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);
    const countNumber = useCountNumber(count, step);
    const countNumber2 = useCountNumber2(count, step);

    useEffect(() => {
       console.log('---re-useEffect--- useCountNumber')
    }, [countNumber]);

    useEffect(() => {
        console.log('---re-useEffect--- useCountNumber2')
    }, [countNumber2]);

    const handleSetStep = () => {
        setStep(step + 1);
        setCount(count + step);
        console.log(`handleSetStep  number1: ${countNumber()}`)
        console.log(`handleSetStep number2: ${countNumber2()}`)
        
    }

    return (
        <div>
            <button onClick={handleSetStep}>set step is : {step} count is : {count}</button>
        </div>
    );
}