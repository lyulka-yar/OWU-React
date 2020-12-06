import React, {Component} from 'react';
import './UserStyle.css'
class User extends Component {
    render() {
        let {user,choseUser,isBtnShow}= this.props;
        return (
            <div>
                Name: {user.name};<br/>
                ID: {user.id};<br/>
                {
                    isBtnShow &&
                    <button onClick={() => {
                    choseUser(user.id)
                }
                    }
                    >find</button>
                }
            </div>
        );
    }
}

export default User;