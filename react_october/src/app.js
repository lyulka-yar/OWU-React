import React, {Component} from 'react';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Todo from "./Components/Todos/Todos";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className='wrap'>
                <hr/>
                <div>
                    -------------------USERS------------------- <Users />
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    -------------------POSTS------------------- <Posts />
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    -------------------TODOS------------------- <Todo />
                    <br/>
                    <hr/>
                    <br/>
                </div>
            </div>
        );

    }
}

export default App;