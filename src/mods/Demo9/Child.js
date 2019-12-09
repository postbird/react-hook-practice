import React, { useEffect, useState, useCallback } from 'react';

export default (props = {}) => {

    useEffect(() => {
        console.log('.....')
        console.log(props.countNumber());
    }, [props.countNumber]);

    return (
        <div>
            {props.countNumber()}
        </div>
    );
}