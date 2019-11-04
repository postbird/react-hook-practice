import React, { Component } from 'react';

export default class Demo1 extends Component {

    state = {
        count: 0,
        list: [],
        obj: {}
    }

    componentDidUpdate() {
        console.log(`----update--- ${JSON.stringify(this.state.obj)}`);
        console.log(`----update--- ${JSON.stringify(this.state.list)}`);
    }

    addHandle = () => {
        const { count } = this.state;
        console.log(`----before---- ${count}`);
        this.setCount(count + 1);
        console.log(`----after---- ${count}`);
    }
    addHandleTimeout = () => {
        setTimeout(() => {
            const { count } = this.state;
            console.log(`----before---- ${count}`);
            this.setCount(count + 1);
            console.log(`----after---- ${count}`);
        }, 1000);
    }
    addHandleTimeout2 = () => {
        const { count } = this.state;
        console.log(`----timeout count ---- ${count}`)
        this.setCount(count + 1);

        setTimeout(() => {
            console.log(`----this.state.count---- ${this.state.count}`);
            console.log(`----count---- ${count}`);
        }, 2000);
    }

    setCount = (count) => {
        this.setState({ count });
    }

    setArrayHandle = () => {
        const newList = this.state.list;
        // const newList = Array.from(this.state.list);
        console.log(newList === this.state.list);
        console.log(`---before--- ${this.state.list}`);
        // newList.push(Math.floor(Math.random() * 10));
        this.state.list[0] = Math.floor(Math.random() * 10);
        this.setState({
            list: this.state.list
        }, () => {
            console.log(`---after--- ${this.state.list}`);
        });
    }

    setObjectHandle = () => {
        const newObj = this.state.obj;
        console.log(newObj === this.state.obj);
        console.log(`---before--- ${JSON.stringify(this.state.obj)}`);
        // newObj.name = Math.floor(Math.random() * 10);
        this.state.obj.name = Math.floor(Math.random() * 10);
        this.setState({ obj: this.state.obj });
        console.log(`---after--- ${JSON.stringify(this.state.obj)}`);
    }

    render() {
        const { addHandle, addHandleTimeout, addHandleTimeout2, setArrayHandle, setObjectHandle } = this;
        const { count, list, obj } = this.state;
        return (
            <div>
                <h2>class component</h2>
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
        )
    }
}