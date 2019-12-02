import React, { useState, useEffect, useRef } from 'react';

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    let num = 0;

    const addHandle = () => {
        num++;
        // countRef.current++;
        setCount(count + 1);
        countRef.current = count;
        setTimeout(() => {
            console.log(`timeout num is: ${num}`);
            console.log(`timeout count is: ${count}`);
            console.log(`timeout countRef is: ${countRef.current}`);
            console.log('---------------------------------------------------')
        }, 2000)
    }

    useEffect(() => {
        console.log(`num is: ${num}`);
        console.log(`count is: ${count}`);
        console.log(`countRef is: ${countRef.current}`);
        countRef.current = count;
    }, [count]);

    return (
        <div>
            <h2>function component</h2>
            <p>count is {count}</p>
            <button onClick={addHandle}>add</button>
        </div>
    );
}