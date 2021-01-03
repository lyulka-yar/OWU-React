import React, {Component} from 'react';
import AppServices from "../services/AppServices";
import Planet from "./Planet";
import {Switch, withRouter, Route, Link} from "react-router-dom";

class Planets extends Component {

    state = {response: [],modal:true};
    appService = new AppServices();

//functions
    componentDidMount() {
        this.appService.getAll().then(response => this.setState({response}));

    }
    nextPlanets = () => {
        const {response: {next}} = this.state;
        this.appService.doFetch(next).then(response => this.setState({response}))
    };
    previousPlanets = () => {
        const {response: {previous}} = this.state;
        this.appService.doFetch(previous).then(response => this.setState({response}))
    };
    closeInfo = (btnName) => {
        if(btnName==='X') {
            this.setState({modal:''})
        }
    }
//functions

    render() {
        const {response} = this.state;
        const {match} = this.props;
        console.log(response);
        if (!response) {
            return <h1>Loading...</h1>
        }
        const num = (+response.next);
        console.log(num)
        return (
            <div className={'test'}>
                <h2>page:{num-1}</h2>
                {
                    response.results && response.results.map((value) => <Planet planet={value}
                                                                                key={parseInt(value.diameter)}
                                                                                match={match}
                                                                                resp={response}
                                                                                closeInfo={this.closeInfo}/>)
                }
                <button onClick={this.previousPlanets}
                        disabled={!response.previous}>previousPlanets
                </button>
                <button onClick={this.nextPlanets}
                        disabled={!response.next}>nextPlanets
                </button>
                <br/>
                <Link exact to={'/'}>home</Link>
                <Switch>
                    <Route path={'/'}/>
                </Switch>
            </div>
        );
    };
}

export default withRouter(Planets);
