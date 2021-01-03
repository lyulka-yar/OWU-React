import React, {Component} from 'react';
import './FullInfo.css';

class PlanetFull extends Component {
    render() {
        const {closeInfo,planet: {diameter, climate, gravity, terrain, population,surface_water}} = this.props;
        return (
            <div onClick={()=>closeInfo} className={'planet-full_info'}>

               <span className={'closeBtn'}>X</span>
                <h3> diameter: {diameter}</h3>
                <h3>climate: {climate}</h3>
                <h3> gravity: {gravity}</h3>
                <h3>terrain: {terrain}</h3>
                <h3>population: {population}</h3>
                <h3> surface_water: {surface_water}</h3>

            </div>
        );
    }
}

export default PlanetFull;