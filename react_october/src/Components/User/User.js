import React, {Component} from 'react';
import '../Posts/PostStyle.css'

class User extends Component {
    render() {
        let {user,color,changeBg,choseUser} = this.props;
        return (
            <div className={`red ${color}`}>
                <b>Name:</b> {user.name}; <br/>
                <b>ID:</b> {user.id};<br/>
                <b>Username:</b> {user.username};<br/>
                <b>Address</b> <br/>{user.address.street};<br/>
                <b>Suite:</b> {user.address.suite};<br/>
                <b>city:</b> {user.address.city};<br/>
                <b>Zipcode:</b> {user.address.zipcode};<br/>
                <b>Geo:</b> <br/> <b>{user.address.geo.lat};</b><br/>
                <b>{user.address.geo.lng};</b> <br/>

                <button onClick={changeBg}>change color</button>
                <button onClick={()=>choseUser(user.id)}>pick me</button>
            </div>
        );
    }
}

export default User;
