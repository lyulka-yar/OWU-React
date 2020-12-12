import React, {Component} from 'react';
import Calculator from "./Components/Calculator/Calculator";
import './App.css';



class App extends Component {


    render() {
        return (
            <div>
                <div className='wrap'>

                    <Calculator />

                </div>
            </div>
        );
    }
}

export default App;