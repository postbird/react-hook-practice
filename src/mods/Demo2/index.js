import React, { useState, useEffect, useRef } from 'react';

const useCurrentValue = (val) => {
    const ref = useRef(val);
    useEffect(() => {
        ref.current = val;
    }, [val]);
    return ref;
}

export default (props = {}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    const countRef2 = useRef(count);
    const countRef3 = useCurrentValue(count);
    useEffect(() => {
        console.log('useEffect [2]')
    });
    useEffect(() => {
        countRef2.current = count;
        console.log('useEffect')
    });

    console.log('-----render-----')
    const addHandle = () => {
        setCount(count + 1);
        countRef.current = count + 1;
        setTimeout(() => {
            console.log(`count is : ${count}`);
            console.log(`countRef.current is: ${countRef.current}`);
            console.log(`countRef2.current is: ${countRef2.current}`);
            console.log(`countRef3.current is: ${countRef3.current}`);
        }, 1000);
    }

    return (
        <div>
            <h2>function component</h2>
            <p>count is {count}</p>
            <button onClick={addHandle}>add</button>
        </div>
    );
}