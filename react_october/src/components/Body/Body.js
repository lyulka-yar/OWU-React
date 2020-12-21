import React, {Component} from 'react';
import Users from "../Users/Users";
import Announcements from "../Announcements/Announcements";

import {
    BrowserRouter as Router,
    Switch,
    withRouter,
    Route
} from "react-router-dom";
import Home from "../Home/Home";
import Settings from "../Settings/Settings";

class Body extends Component {





    render() {

        return (
            <div>

                <Switch>
                    <Route path={'/Home'} component={Home}/>
                    <Route path={'/Users'} component={Users}/>
                    <Route path={'/Announcements'} component={Announcements}/>
                    <Route path={'/Settings'} component={Settings}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Body);