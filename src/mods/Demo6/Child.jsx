import React, { useEffect, useState, useCallback } from 'react';


export default (props = {}) => {
    const { obj } = props;

    console.log('----render----');

    useEffect(() => {
        console.log('-----obj changed - useEffect ----');
    }, [obj]);

    const handleAdd = () => {
        const { onAdd } = props;
        onAdd();
    }

    return (
        <div>
            <h2>function component</h2>
            <p>name is {obj.person.name}</p>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}