import React, { useEffect, useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + state.step,
                step: state.step + 1,
            }
        default:
            return state;
    }
}

export default (props = {}) => {
const initialState = {
    count: 0,
    step: 1
}
const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;

useEffect(() => {
    console.log('render useEffect')
    const id = setInterval(() => {
        dispatch({ type: 'increment' });
        console.log(`[] count is ${state.count}, step is ${state.step}`);
    }, 1000);
    return () => clearInterval(id);
}, []);

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