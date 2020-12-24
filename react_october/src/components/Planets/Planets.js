import React, {Component} from 'react';
import AppServices from "../services/AppServices";
import Planet from "./Planet";


class Planets extends Component {
    state = {response: null};
    appService = new AppServices();

    componentDidMount() {

        this.appService.getAll().then(response => this.setState({response}))

    }

    nextPlanets = () => {
        const {response: {next}} = this.state;
       this.appService.doFetch(next).then(response => this.setState({response}))
    }
    previousPlanets=()=> {
        const {response: {previous}} = this.state;
        this.appService.doFetch(previous).then(response => this.setState({response}))
    }

    render() {
        const {response} = this.state;
        console.log(response);

        if (!response) {
            return <h1>Loading...</h1>
        }
        const num = response.count / 10

        return (
            <div>
                <h2>{num}</h2>
                {
                    response.results.map((value, index) => (<Planet planet={value} key={value.name}/>))
                }
                <button onClick={this.previousPlanets} disabled={!response.previous}>previousPlanets</button>
                <button onClick={this.nextPlanets} disabled={!response.next}>nextPlanets</button>
            </div>
        );
    }



}

export default Planets;
