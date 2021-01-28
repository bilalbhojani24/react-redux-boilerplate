import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    // check your authentication here. 
    // For example : cookied.get(), localStorage.get() etc...
    // set isLogin -> true/false 
    let isLogin = true;     
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : 
            <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;


