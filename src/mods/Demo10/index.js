import React, { useEffect, useState, useCallback, useRef } from 'react';

const useOnceCallback = (fn, dependencies) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = fn;
    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const calNum = () => {
        return count + step;
    }

    const countNumber = useOnceCallback(calNum, [count, step]);

    useEffect(() => {
        console.log('-----re-useEffect-----');
    }, [countNumber])

    const handleSetStep = () => {
        setStep(step + 1);
        setCount(count + step);
        console.log(countNumber());
    }


    return (
        <div>
            <button onClick={handleSetStep}>set step is : {step} count is : {count}</button>
        </div>
    );
}