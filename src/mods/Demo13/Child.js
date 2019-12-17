import React, { useContext, memo } from 'react';

import { MyContext } from './context-manager';

export default memo((props = {}) => {
    const { dispatch } = useContext(MyContext);

    return (
        <div>
            <p>step is : {props.step}</p>
            <p>number is : {props.number}</p>
            <p>count is : {props.count}</p>
            <hr />
            <div>
                <button onClick={() => { dispatch({ type: 'stepInc' }) }}>step ++</button>
                <button onClick={() => { dispatch({ type: 'numberInc' }) }}>number ++</button>
                <button onClick={() => { dispatch({ type: 'count' }) }}>number + step</button>
            </div>
        </div>
    );
});