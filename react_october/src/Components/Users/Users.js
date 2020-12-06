import React, {Component} from 'react';
import User from './User';
class Users extends Component {
    state = {users:[], chosenUser:'null'};

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users:usersFromAPI});
            });
    }

    choseUser = (id) => this.setState({chosenUser:this.state.users.find(value => value.id===id)});

    render() {
        let {users,chosenUser} = this.state;
        return (
            <div>
                {
                    users.map((value => (<User user={value} index={value.id} choseUser={this.choseUser} isBtnShow={true}/>)))
                }
                {
                    chosenUser &&  <User user={chosenUser} isBtnShow={false}/>
                }
            </div>
        );
    }
}

export default Users;