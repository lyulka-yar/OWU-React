import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div className={'wrap'}>
                    <div className={'user'}> <Link to={'/users'}><b>Users</b></Link></div>
                    <div className={'post'}><Link to={'/posts'}><b>Posts</b></Link></div>
                    <div className={'comment'}><Link to={'/comments'}><b>Comments</b></Link></div>
                </div>
                <Switch>
                    <div className={'user'}><Route exact path={'/users'} children={<Users/>}/></div>
                    <div className={'post'}><Route exact path={'/posts'} children={<Posts/>}/></div>
                    <div className={'comment'}><Route exact path={'/comments'} children={<Comments/>}/></div>
                </Switch>

            </Router>
        );

    }
}

export default App;