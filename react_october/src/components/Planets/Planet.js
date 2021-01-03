import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Planet extends Component {
    render() {
        const {planet} = this.props;
        return (
            <div>
                name: {planet.name} <br/>
                Orbital period: {planet.orbital_period}
                diameter: {planet.diameter}
                <button> info</button>

            </div>
        );
    }
}

export default withRouter(Planet);