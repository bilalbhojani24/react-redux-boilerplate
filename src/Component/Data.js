import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {dataAction} from '../Redux/Actions/dataAction';

function Data() {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataAction.getData());
    }, []);

    return (
        <div>
            <h1>Data Page</h1>
            {
             !data.loading &&
             data.data.map(item => (
                 <div className="data">
                    <h1>{item.id}</h1>
                    <p>{item.body}</p>
                 </div>
             ))
            }
        </div>
    )
}
export default Data
