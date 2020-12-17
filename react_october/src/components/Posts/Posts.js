import React, {Component} from 'react';
import Post from "./Post";
import AppServices from "../services/AppServices";
import {Link, Route, withRouter} from "react-router-dom";

class Posts extends Component {
    appService = new AppServices();
    state={posts: []};

    componentDidMount() {
    this.appService.checkPost().then(value => this.setState({posts:value}))
    }


    render() {

        let {posts} = this.state;
        let {match:{url},match} = this.props;
        return (
            <div>
                {posts.map(value => <Post post={value} key={value.id} />)}
            </div>
        );

    }
}

export default withRouter(Posts);