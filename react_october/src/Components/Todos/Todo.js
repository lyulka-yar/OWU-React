import React, {Component} from 'react';
import '../Posts/PostStyle.css';

class Todo extends Component {


    render() {
        let {todo, choseTodo, color, changeColor} = this.props;
        return (
            <div className={`red ${color}`}>
                userID: {todo.userId};
                    ID: {todo.id};
                    Title: {todo.title};
                    Completed: {todo.completed.toString()};
                    <button onClick={() => choseTodo(todo.id)}>chose todo</button>
                    <button onClick={changeColor}>change color</button>

            </div>
        );
    }
}

export default Todo;