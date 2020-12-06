import React, {Component} from 'react';
import User from './User';
class Users extends Component {
    state = {users:[],colorChanger:''}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users:usersFromAPI});
            });
    }


    changeBg = () => {
        if (this.flag) {
            this.setState({colorChanger:'one'});
        } else {
            this.setState({colorChanger: 'two'});
        }
        this.flag = !this.flag;
    }

    render() {
        let {users,colorChanger} = this.state;
        return (
            <div>
                {
                    users.map((value => (<User
                        user={value}
                        index={value.id}
                        changeBg={this.changeBg}
                        color={colorChanger}
                    />)))
                }
            </div>
        );
    }
}

export default Users;