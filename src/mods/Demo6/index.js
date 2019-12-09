import React, { useEffect, useState, useCallback } from 'react';
import Child from './Child';


export default (props = {}) => {

    const [obj, setObj] = useState({ person: { name: "xxx" } });

    console.log('-----[parent]  re-render----');
    console.log(obj);

    useEffect(() => {
        console.log('-----[parent]  obj changed - useEffect ----');
    }, [obj]);

    const handleAdd = () => {
        const newObj = obj;
        newObj.person = { name: 'xxx2' };
        setObj(newObj);
    }

    return (
        <div>
            <Child onAdd={handleAdd} obj={obj} />
        </div>
    );
}