import React, {Component} from 'react';
import './PostStyle.css'

class Post extends Component {

    render() {
        let {posts,changeBg,colorS,red} = this.props;
        return (
            <div className='red'>
                <div className={`${red} ${colorS}`}>
                <b>ID:</b>  {posts.id};
                <b>userID:</b> {posts.userId};
                <b>Title:</b> {posts.title};
                <b>Body:</b> {posts.body};
                <button onClick={changeBg}>check</button>
            </div>
            </div>
        );
    }
}

export default Post;