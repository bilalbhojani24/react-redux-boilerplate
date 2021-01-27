import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testAction} from '../Redux/Actions/testActions';

function Private() {
    const counter = useSelector((state) => state.counter); 
    const dispatch = useDispatch();
    
    const functionCount = () => {
        dispatch(testAction.counter(counter.count))
    }
    return (
        <div>
            <h1>Welcome to private page.</h1>
            <button onClick={() => {functionCount()}}>Counter</button>
            <h1>{counter.count}</h1>
        </div>
    )
}

export default Private
