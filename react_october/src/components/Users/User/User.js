import React, {Component} from 'react';
import './user.css'
import {withRouter} from "react-router-dom";
import Details from "../../Buttons/Details/Details";
class User extends Component {

    render() {

        const {user, user: {id, name},chosenUser} = this.props;
        console.log(user);
        return (
            <div className={'user-wrapper'}>
                {id}{'. '}
                {name}
                <div>
                    <Details user={user} chosenUser={chosenUser}/>
                </div>
            </div>
        );
    }
}

export default withRouter(User);