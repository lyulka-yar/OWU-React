import React, {Component} from 'react';
import './App.css';
import {withRouter} from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";


class App extends Component {
    render() {


        return (
            <div className={'wrap'}>
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default withRouter(App);