import React, { useContext, memo } from 'react';

import { MyContext } from './context-manager';

export default memo((props = {}) => {
    const { state, dispatch } = useContext(MyContext);
    return (
        <div>
            {console.log('[Child] RE-RENDER')}
            <p>step is : {state.step}</p>
            <p>number is : {state.number}</p>
            <p>count is : {state.count}</p>
            <hr />
            <div>
                <button onClick={() => { dispatch({ type: 'stepInc' }) }}>step ++</button>
                <button onClick={() => { dispatch({ type: 'numberInc' }) }}>number ++</button>
                <button onClick={() => { dispatch({ type: 'count' }) }}>number + step</button>
            </div>
        </div>
    );
});