import React, { useContext, useMemo } from 'react';

import { MyContext } from './context-manager';

export default (props = {}) => {
    const { state, dispatch } = useContext(MyContext);
    return useMemo(() => {
        console.log('[Child] RE-RENDER');
        return (
            <div>
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
        )
    }, [state.count, state.number, state.step, dispatch]);