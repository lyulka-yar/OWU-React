import React, {Component} from 'react';
import AppServices from "../services/AppServices";
import Planet from "./Planet";


class Planets extends Component {
    state={planets:[]};
    appService = new AppServices();
    async componentDidMount () {
        await this.appService.getAll().then(value => this.setState({planets:value}))
    }
    render() {
        const {planets} = this.state;
        return (
            <div>
                {
                    planets.map(value => (<Planet planet={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default Planets;