import React, {Component} from 'react';
import './moreInfo.css'
class Details extends Component {
    render() {
        const { chosenUser,user } = this.props;
        return (
            <div>
                <button onClick={()=>chosenUser(user)} className={'btn-info-card'}>more info</button>
            </div>
        );
    }
}

export default Details;