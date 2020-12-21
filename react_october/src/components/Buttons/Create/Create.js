import React, {Component} from 'react';
import './Create.css'
class Create extends Component {
    render() {
    const { createUser } = this.props;

        return (
            <div className={'modalCreate'}>
                <button onClick={()=>createUser()} className={'btn-create-new-user-card'}>create user card</button>
            </div>
        );
    }
}

export default Create;