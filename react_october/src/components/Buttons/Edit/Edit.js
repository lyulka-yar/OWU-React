import React, {Component} from 'react';
import './Edit.css';
class Edit extends Component {
    render() {
        const { editUser } = this.props;
        return (

                <button onClick={()=> editUser()} className={'btn-edit-user-card'}>edit</button>
          
        );
    }
}

export default Edit;