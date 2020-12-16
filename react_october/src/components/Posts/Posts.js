import React, {Component} from 'react';
import Post from "./Post";
import AppServices from "../services/AppServices";

class Posts extends Component {
    appService = new AppServices();
    state={posts: []};

    componentDidMount() {
    this.appService.checkPost().then(value => this.setState({posts:value}))
    }


    render() {

        let {posts} = this.state;
        return (
            <div>
                {posts.map(value => <Post post={value} key={value.id}/>)}

            </div>
        );


    }
}

export default Posts;