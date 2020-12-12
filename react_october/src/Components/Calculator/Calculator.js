import React, {Component} from 'react';
import Computing from "./Computing/Computing";
import './CalculatorViewer.css';

class Calculator extends Component {
    render() {
        return (
            <div className='wraper'>
                <span className='title'>calculator</span>
                <Computing/>
            </div>

        );
    }
}

export default Calculator;