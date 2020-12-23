import React, {Component} from 'react';
import Todo from "./Todo";



class Todos extends Component {

    state = {todos: [], colorChanger: '', chosenTodo: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(todosFromAPI => {
                this.setState({todos: todosFromAPI});
            });

    }
    choseTodo = (id) => {
        let chosenTodo = this.state.todos.find((value)=>value.id === id);
        this.setState({chosenTodo})
    }
    changeColor = () => {
        if (this.flag){
            this.setState({colorChanger:'one'});
        } else {
            this.setState({colorChanger: 'two'});
        }
        this.flag = !this.flag;
    }


    render() {
        let {todos, chosenTodo, colorChanger} = this.state;

        return (
            <div>
                {
                    todos.map((value) =>(
                        <Todo
                        todo={value}
                        index={value.completed}
                        color={colorChanger}
                        choseTodo={this.choseTodo}
                        changeColor={this.changeColor}
                        />
                    ))
                })

                <hr/>
                <hr/>
                {
                    chosenTodo && <Todo todo={chosenTodo}/>
                }
            </div>
        );
    }
}

export default Todos;