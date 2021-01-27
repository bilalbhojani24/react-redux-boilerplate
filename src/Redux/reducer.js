import { combineReducers } from 'redux';
import testReducer from './Reducers/testReducer';
import dataReducer from './Reducers/dataReducer';

export default combineReducers({
    // reducer name = imported reducer name; 
    counter : testReducer,
    data : dataReducer,
});