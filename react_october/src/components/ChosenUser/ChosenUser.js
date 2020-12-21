import React, {Component} from 'react';
import './ChosenUser.css';
import Edit from "../Buttons/Edit/Edit";
import Delete from "../Buttons/Delete/Delete";
import Loading from "../services/Loading/Loading";


class ChosenUser extends Component {

    render() {

        const {chosenUser,deleteUser,editUser} = this.props;
        const {id, name, username, email, phone, website} = chosenUser
        if (chosenUser) {
            return (
                <div className={'chosen'}>
                    <hr/>
                    <h2 className={'chosen-title'}>{name} <span className={'up'}>card</span></h2>
                    <hr/>
                    <span className={'user-title sup'}> Username: {username};</span> {' '}
                    <span className={'user-title sup'}>  ID: {id}</span>
                    <hr/>
                    <span className={'user-title'}>Name:</span> <p>{name}</p>
                    <span className={'user-title'}> Phone:</span> <p>{phone}</p>
                    <span className={'user-title'}>cite:</span> <p>{website}</p>
                    <span className={'user-title'}>@mail:</span> <p>{email}</p>
                    <div className={'btn-wrapper'}>
                       <Edit editUser={editUser}/>
                       <Delete deleteUser={deleteUser} id={id}/>
                    </div>

                </div>
            );
        } else {
            return (
                <div className={'chosen'}>
                    <Loading/>
                </div>);
        }
    }
}

export default ChosenUser;