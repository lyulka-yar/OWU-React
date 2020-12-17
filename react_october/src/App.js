import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import {Link, Route, Switch, withRouter} from "react-router-dom";


class App extends Component {
    render() {


        return (

            <div className={`wrap`}>
                <ul>
                    <li><Link to={'/posts'}><b>Posts</b></Link></li>
                    <li><Link to={'/users'}><b>Users</b></Link></li>
                    <li><Link to={'/comments'}><b>Comments</b></Link></li>
                </ul>
                <Switch>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);