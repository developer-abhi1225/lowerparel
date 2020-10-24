import React from 'react'
import {Route, Switch} from 'react-router';
import Home from '../Home';
import Tasks from '../Tasks';
import User from '../User';

class MainApp extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        if(this.props.history.location.pathname === "/"){
            this.props.history.push("/home")
        }
    }

    render(){
        return(
            <Switch>
                <Route exact={true}  path={'/home'} component={Home} />
                <Route exact={true}  path={'/tasks'} component={Tasks} />
                <Route exact={true}  path={'/User'} component={User} />
            </Switch>
        )
    }
}

export default MainApp
