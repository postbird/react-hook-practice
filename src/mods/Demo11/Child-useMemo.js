import React, { useMemo } from 'react';

export default (props = {}) => {
    console.log(`--- component re-render ---`);
    return useMemo(() => {
        console.log(`--- useMemo re-render ---`);
        return <div>
            {/* <p>step is : {props.step}</p> */}
            {/* <p>count is : {props.count}</p> */}
            <p>number is : {props.number}</p>
        </div>
    }, [props.number]);
}