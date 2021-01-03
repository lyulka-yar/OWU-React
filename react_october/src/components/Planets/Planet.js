import React, {Component} from 'react';
import {Link, withRouter,Route,Switch} from "react-router-dom";
import PlanetFull from "./PlanetFull";
class Planet extends Component {

    render() {
        const {closeInfo,planet,match:{url}} = this.props;
        return (
            <div className={'planet-wrapper'}>
                <h3 className='planet-info'>
                    name: {planet.name}; <br/>
                   <Link className={'info'} to={`${url}/${planet.name}`}>info</Link>
                    <Switch>
                        <Route path={`${url}/${planet.name}`}>
                            <PlanetFull planet={planet} closeInfo={closeInfo}/>
                        </Route>
                    </Switch>
                </h3>
            </div>
        );
    }
}

export default withRouter(Planet);