import React, { useState, useEffect } from 'react';


export default (props = {}) => {

    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [obj, setObj] = useState({});

    const addHandle = () => {
        console.log(`----before---- ${count}`);
        setCount(count + 1);
        console.log(`----after---- ${count}`);
    }
    const addHandleTimeout = () => {
        setTimeout(() => {
            console.log(`----before---- ${count}`);
            setCount(count + 1);
            console.log(`----after---- ${count}`);
        }, 1000);
    }
    const addHandleTimeout2 = () => {
        console.log(`----timeout count ---- ${count}`);
        setCount(count + 1);
        setTimeout(() => {
            console.log(`----count---- ${count}`);
        }, 2000);
    }

    const setArrayHandle = () => {
        // const newList = Array.from(list);
        const newList = list;
        console.log(newList === list);
        console.log(`---before--- ${list}`);
        newList[0] = Math.floor(Math.random() * 10);
        setList(newList);
    }

    const setObjectHandle = () => {
        const newObj = obj;
        // const newObj = Object.assign({}, obj);
        console.log(newObj === obj);
        newObj.name = Math.floor(Math.random() * 10);
        setObj(newObj);
        console.log(`---after--- ${JSON.stringify(obj)}`);
    }

    useEffect(() => {
        console.log(`----effect--- ${JSON.stringify(obj)}`);
    }, [obj]);

    useEffect(() => {
        console.log(`----effect--- ${JSON.stringify(list)}`);
    }, [list]);

    return (
        <div>
            <h2>function component</h2>
            <p>number is {count}</p>
            <button onClick={addHandle}>add</button>
            <hr />
            <p>setTimeout</p>
            <p>number is {count}</p>
            <button onClick={addHandleTimeout}>add</button>
            <hr />
            <p>setTimeout 2</p>
            <p>number is {count}</p>
            <button onClick={addHandleTimeout2}>add</button>
            <hr />
            <p>array[0] is {list[0]}</p>
            <button onClick={setArrayHandle}>set array</button>
            <hr />
            <p>object is ：{JSON.stringify(obj)}</p>
            <button onClick={setObjectHandle}>set object</button>
        </div>
    );
}