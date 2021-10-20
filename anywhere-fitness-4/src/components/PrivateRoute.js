import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRouteClient({ component: Component, ...rest}) {
    return (
        <Route { ...rest} render={() => {
            if(window.localStorage.getItem('token')) {
                return <Component />;
            }else {
                return <Redirect to="/signup"/>;
            }
        }}/>
    );
}

export default PrivateRouteClient