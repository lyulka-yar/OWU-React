import React, {Component} from 'react';
import {Link, withRouter, Route} from "react-router-dom";


class Post extends Component {
    render() {
        let {post, match: {url}} = this.props;

        return (
            <div className={'card'}>
                {/*UserId: {post.userId}; <br/>*/}
                {/*Id: {post.id}; <br/>*/}
                title: {post.title};
                {
                    <Link className={'olo'} to={`${url}/${post.id}`}>more info</Link>
                }
                {
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return ('gggg')
                    }
                    }/>
                }
            </div>
        );
    }
}

export default withRouter(Post);