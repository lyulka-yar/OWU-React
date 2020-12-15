import React, {Component} from 'react';
import User from './User';
import UserServices from "../../services/UserServices";

class Users extends Component {

    userService = new UserServices();
    state = {users: [], chosedUser: null,btn:''};
    //API
    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }
    //API
    //Functions
    findUser = (id) => this.setState({chosedUser: this.state.users.find(value => value.id === id)})
    //Functions

    render() {
        let {chosedUser, users, btn} = this.state;
        return (
            <div className={'container'}>
                {
                    users.map(value => (
                        <User findUser={this.findUser} user={value} chosedUser={chosedUser} key={value.id} button={btn}
                              btn={true}/>))
                }
                {
                    chosedUser && <User user={chosedUser} btn={false}/>
                }
            </div>
        );
    }
}

export default Users;