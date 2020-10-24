import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router';
import Login from "../Login";
import NavBar from '../NavBar';
import history from "../../history";


const RestrictedRoute = ({component: Component, token, ...rest}) => {
    return <Route
        {...rest}
        render={() =>
            token ? (
                history.location.pathname !== "/login" ?
                    <Component history={history} /> : history.goBack()
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                    }}
                />
            )
        }
    />;
}

function NextApp() {
    console.log("render")
  return (
        <Router history={history}>
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <RestrictedRoute path={"/"} token={localStorage.getItem('token')} component={NavBar} />
            </Switch>
        </Router>    
  );
}

export default NextApp;
