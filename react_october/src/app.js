import React, {Component} from 'react';
import Users from "./Components/User/Users";
import Posts from "./Components/Posts/Posts";
import Todo from "./Components/Todos/Todo";
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
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
        )
            ;

    }
}

export default App;