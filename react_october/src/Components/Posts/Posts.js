import React, {Component} from 'react';
import Post from './Post';
class Posts extends Component {
    state = {posts: [],colorChanger:''};
    changeBg = () => {
        if (this.flag){
            this.setState({colorChanger:'one'});
        } else {
            this.setState({colorChanger:'two'});
        }
        this.flag= !this.flag;
        console.log(this.colorChanger, this.state)
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI})
            });
    }
    render(){
        let {posts,colorChanger} = this.state;
        return (
            <div>
                {
                    posts.map((value)=>(
                        <Post
                            posts={value}
                            key={value.id}
                            userId={value.userId}
                            info={value.title}
                            body={value.body}
                            changeBg={this.changeBg}
                            colorS={colorChanger}
                        />))
                }
            </div>
        );
    }
}
export default Posts;