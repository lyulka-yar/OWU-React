import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post} = this.props;
        return (

                <div>

                    {/*UserId: {post.userId}; <br/>*/}
                    Id: {post.id}; <br/>
                    title: {post.title};

                </div>

        );
    }
}

export default Post;