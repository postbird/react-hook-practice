import React, { useReducer } from 'react';
import Child from './Child';
import { MyContext } from './context-manager';

const initState = { count: 0, step: 0, number: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'stepInc': return Object.assign({}, state, { step: state.step + 1 });
        case 'numberInc': return Object.assign({}, state, { number: state.number + 1 });
        case 'count': return Object.assign({}, state, { count: state.step + state.number });
        default: return state;
    }
}

export default (props = {}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { step, number, count } = state;

    return (
        <MyContext.Provider value={{ dispatch }}>
            <Child step={step} number={number} count={count} />
        </MyContext.Provider>
    );
}