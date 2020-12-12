import React, {Component} from 'react';
import CalcBtn from "../ComputingUI/CalcBtn";
import InputSubmit from "../InputSubmit/InputSubmit";
// import {calcService} from "../../../Services/CalcService";

class Computing extends Component {

    // calcService =  new calcService();

    state = {result:0,inputValue:''}

    numbers = [1,-1,100,-100,3.14156,'dadada']



    // componentDidMount() {
    //     this.calcService.calculating()
    // }


    incAndDec = (number) => {
        let {result} = this.state;
        const value = result + number
        value > 0
            ? this.setState({result: value})
            : this.setState({result: 0})
    }

    inputType = () => {
        const {result, inputValue} = this.state;
        const num = +inputValue;
        if (!isNaN(num)) {
            const value = result + num
            value > 0
                ? this.setState({result: value})
                : this.setState({result: 0})
        }
    }

    inputAddNum = (value) => {
        this.setState({inputValue: value})
    }

    reset = () => {
        this.setState({result: 0})
    }

    render() {
        let {result} = this.state;
        return (
            <div>
                <CalcBtn result={result}
                         numbers={this.numbers}
                         incAndDec={this.incAndDec}
                         reset={this.reset}/>
                <InputSubmit inputType={this.inputType} inputAddNum={this.inputAddNum} />
            </div>
        );
    }
}

export default Computing;