import React, {Component} from 'react';
import Users from "../Users/Users";
import {
    BrowserRouter as Router,
    Switch,
    withRouter,
    Route
} from "react-router-dom";
import Home from "../Home/Home";

class Body extends Component {





    render() {

        return (
            <div>

                <Switch>
                    <Route path={'/Home'} component={Home}/>
                    <Route path={'/Users'} component={Users}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Body);