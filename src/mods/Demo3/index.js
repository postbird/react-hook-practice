import React, { useState, useEffect, useRef } from 'react';

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(count + 1);
    //         console.log(`[] count is ${count}`);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(prevCount => prevCount + 1);
    //         console.log(`[] count is ${count}`);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);

    useEffect(() => {
        console.log('render useEffect')
        const id = setInterval(() => {
            setCount(prevCount => prevCount + step);
            setStep(step => step + 1);
            console.log(`[] count is ${count}, step is ${step}`);
        }, 1000);
        return () => clearInterval(id);
    }, [step]);

    useEffect(() => {
        console.log(`[change] count is ${count}`);
    }, [count]);

    useEffect(() => {
        console.log(`[change] step is ${step}`);
    }, [step]);

    return (
        <div>
            <h2>function component</h2>
            <p>count is {count}</p>
            {/* <button onClick={addHandle}>add</button> */}
        </div>
    );
}