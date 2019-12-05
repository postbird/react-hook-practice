import React, { useEffect, useState, useCallback } from 'react';


export default (props = {}) => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const setCountNew = useCallback(() => {
        setCount(count + step);
        setStep(step + 1);
    }, [count, step]);

    useEffect(() => {
        console.log('render useEffect')
        const tm = setInterval(() => {
            setCountNew();
        }, 1000);

        return () => { clearInterval(tm); }
    }, [setCountNew]);

    useEffect(() => {
        console.log(`[change] count is ${count}`);
    }, [count]);


    return (
        <div>
            <h2>function component</h2>
            <p>count is {count}</p>
            {/* <button onClick={addHandle}>add</button> */}
        </div>
    );
}