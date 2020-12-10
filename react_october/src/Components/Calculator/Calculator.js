import React, {Component} from 'react';
import './CalculatorViewer.css'
import CalcBtn from "../ComputingUI/CalcBtn";
import InputSubmit from "./InputSubmit/InputSubmit";

class Calculator extends Component {
    render() {
        return (
            <div className='wraper'>
                <span className='title'>calculator</span>
                <CalcBtn/>
                <InputSubmit/>
            </div>

        );
    }
}

export default Calculator;