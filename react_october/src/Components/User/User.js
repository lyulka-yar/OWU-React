import React, {Component} from 'react';

class User extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                <h3>
                    NAME:  {user.name};<br/>
                        AGE:  {user.age};<br/>
                    STATUS:  {user.status.toString()};<br/>
                </h3>
            </div>
        );
    }
}

export default User;