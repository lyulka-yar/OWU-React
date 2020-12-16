import React, {Component} from 'react';
import AppServices from "../services/AppServices";

class Users extends Component {
    appService = new AppServices();
    state={users: []};
    render() {
        return (
            <div>
                hello123
            </div>
        );
    }
}

export default Users;