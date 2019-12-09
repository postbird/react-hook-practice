import React, { Component } from 'react';

export default class Demo7Classs extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.countNumber();
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps, this.props);
        console.log('---updated---');
        if (prevProps.count !== this.props.count && prevProps.step !== this.props.step) {
            console.log(`---- count number is ${this.props.countNumber()} ----`);
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.count} -- {this.props.step} -- {this.props.countNumber()}</p>
            </div>
        );
    }
}