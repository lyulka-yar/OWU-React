import React, {Component} from 'react';
import './Users.css'
import AppServices from "../services/ApiServices";
import User from "./User/User";
import ChosenUser from "../ChosenUser/ChosenUser";
import {
    Link, Route, Switch,
    withRouter,
} from "react-router-dom";
import Loading from "../services/Loading/Loading";


class Users extends Component {
    state = {users: [], chosenUser: null};

    componentDidMount() {
        const {match: {url}} = this.props;
        AppServices(url)
            .then(value => this.setState({users: value}))
    }

    //Functions

    chosenUser = (chosenUser) => {
        this.setState({chosenUser})

    }


    //Functions

    render() {
        const {users, chosenUser} = this.state;
        if (users) {
            return (
                <div className={'wrapper'}>
                    <div className={'users-wrapper'}><h2 className={'f20'}>List of Users</h2>
                        {users.map(value => <User user={value} chosenUser={this.chosenUser} key={value.id}/>)}
                        <Link className={'goHome btn-info-card'} to={'/home'}>back <b>Home</b></Link>
                        <Switch>
                            <Route path={'/Home'}/>
                        </Switch>
                    </div>
                    <div className={'chosen-user-info'}>
                        {chosenUser && <ChosenUser chosenUser={chosenUser}/>}
                    </div>
                </div>)
        } else {
            return (
                <div className={'card-wrapper'}>
                    <Loading/>
                </div>
            )
        }
    }

}


export default withRouter(Users);