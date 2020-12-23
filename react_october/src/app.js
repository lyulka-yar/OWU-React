import React, {Component} from 'react';
import Posts from "./components/Posts/Posts";
import './App.css';
import Users from "./components/Users/Users";
import Todos from "./components/Todos/Todos";

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
                    -------------------TODOS------------------- <Todos />
                    <br/>
                    <hr/>
                    <br/>
                </div>
            </div>
        );

    }
}



export default App;