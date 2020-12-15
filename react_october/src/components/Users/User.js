import React, {Component} from 'react';

class User extends Component {
    render() {
        let {findUser, user, btn} = this.props;
        return (
            <div className={'wrapper'}>

                <div className={'card'}>
                    <b>name: </b>  {user.name}; <br/>
                    <b>username: </b> <br/> {user.username};<br/>
                    <b>id: </b>  {user.id}; <br/>
                    <b>@mail: </b> <br/> {user.email};<br/>
                    <b>city: </b> {user.address.city};<br/>
                    <b>suite: </b> <br/> {user.address.suite};<br/>
                    <b>address: </b> <br/> {user.address.street};<br/>
                    {
                        btn && <button onClick={() => findUser(user.id)} className={'btn'}>find</button>
                    }
                </div>

            </div>
        );
    }
}

export default User;