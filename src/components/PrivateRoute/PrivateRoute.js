import React, { Children } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();
    return (
    <Route
    {...rest}
    render={({location})=> user.displayName? Children:<Redirect  to={{
        pathname: "/login",
        state: { from: location }
      }}>
      
    </Redirect>}
    >

    </Route>
    );
};

export default PrivateRoute;