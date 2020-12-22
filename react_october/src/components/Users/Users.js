import React, {Component} from 'react';
import './Users.css'
import User from "./User/User";
import ChosenUser from "../ChosenUser/ChosenUser";
import Loading from "../services/Loading/Loading";
import AppServices from "../services/ApiServices";
import {
    Link, Route, Switch,
    withRouter,
} from "react-router-dom";
import ModEdit from "../services/ModalEdit/ModEdit";
import ModCreate from "../services/ModalCreate/ModCreate";
import Create from "../Buttons/Create/Create";


class Users extends Component {
    state = {users: null, chosenUser: null, modal: '', modalCreate: ''};

    componentDidMount() {
        const {match: {url}} = this.props;
        AppServices(url)
            .then(value => this.setState({users: value}))
    }

    //Functions

    chosenUser = (chosenUser) => {
        this.setState({chosenUser})
    }

    //manipulation
    createUser = () => {
        this.setState({modalCreate: 'show'})
    }
    editUser = () => {
        this.setState({modal: 'show'})
    }
    deleteUser = (id) => {
        const {users: old} = this.state;
        const users = old.filter(user => user.id !== id);
        this.setState({users});
        this.setState({chosenUser: null})
        let {history} = this.props;
        history.push('/users');
    }
    //manipulation

    //modal window

    modalCreateClose = (btnType, newUser) => {
        if (btnType === 'create') {
            const {users} = this.state
            newUser.id = users[users.length - 1].id + 1
            users.push(newUser)
            this.setState({users})
        } this.setState({modalCreate: ''})
    }
    modalSaveClose = (btnType, stateFromModal) => {
        if (btnType === 'save') {
            const users = this.state.users.filter(user => user.id !== stateFromModal.id);
            users.push(stateFromModal);
        this.setState({chosenUser:stateFromModal});
        users.sort((a,b) => {
            return a.id - b.id
        })
this.setState({users});
        }
        this.setState({modal:''})
    }
    //modal window

    //Functions

    render() {
        const {users, chosenUser, modal, modalCreate} = this.state;
        if (users) {
            return (
                <div className={'wrapper'}>
                    <div className={'users-wrapper'}><h2 className={'f20'}>List of Users</h2>
                        {users.map(value => <User user={value} chosenUser={this.chosenUser} key={value.id}/>)}
                        <Link className={'goHome btn-info-card'} to={'/home'}><b>Home page</b></Link>
                        <Switch>
                            <Route path={'/Home'}/>
                        </Switch>
                    </div>
                    <div className={'chosen-user-info'}>
                        <Create createUser={this.createUser}/>
                        {chosenUser &&
                        <ChosenUser chosenUser={chosenUser} deleteUser={this.deleteUser} editUser={this.editUser}/>}
                    </div>
                    {modal && <ModEdit modalSaveClose={this.modalSaveClose} chosenUser={chosenUser}/>}
                    {modalCreate && <ModCreate modalCreateClose={this.modalCreateClose}/>}
                </div>)
        } else {
            return (
                <div className={'users-wrapper'}>
                    <Loading/>
                </div>
            )
        }
    }
}

export default withRouter(Users);