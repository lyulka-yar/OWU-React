import React, {Component} from 'react';

class Planet extends Component {
    render() {
        const { planet } = this.props;
        return (
            <div>
                {planet.name}
            </div>
        );
    }
}

export default Planet;