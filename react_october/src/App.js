import React, {Component} from 'react';
import User from "./Components/User/User";
import './Components/User/UserStyle.css'

class App extends Component {
    users = [ {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'maximis', age: 41, status: true},
        {name: 'Pavlo', age: 50, status: false},
        {name: 'Karokys', age: 71, status: true},
        {name: 'Ihhhar', age: 42, status: false} ];
    render() {
        return (
            <div>
                {
                    this.users.map((value)=>{
                        return(
                            <User user={value}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;