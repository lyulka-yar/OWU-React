import React, {Component} from 'react';
import './App.css';
import {
    withRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Planets from "./components/Planets/Planets";


class App extends Component {

    render() {

        return (
            <div>
                <Link to={'/planets'}>planets</Link>
                <Switch>
                    <Route path={'/planets'} component={Planets}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
