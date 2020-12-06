import React, {Component} from 'react';
import User from './User';
class Users extends Component {
    state = {users:[],colorChanger:'',chosenUser:null}
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
    } //todo зміна фону

    choseUser = (id) => {
        let chosenUser = this.state.users.find((value => value.id === id));
        this.setState({chosenUser})
    } //todo вибираємо юзера


    render() {
        let {users,colorChanger,chosenUser} = this.state;
        return (
            <div>
                {
                    users.map((value => (<User
                        user={value}
                        index={value.id}
                        changeBg={this.changeBg}
                        choseUser={this.choseUser}
                        color={colorChanger}
                    />)))
                }
                <hr/>
                <hr/>
                {chosenUser && (<User user={chosenUser}/>)}
            </div>
        );//todo && мова якщо true відмалювати, якщо false нічого не робити
    }
}

export default Users;