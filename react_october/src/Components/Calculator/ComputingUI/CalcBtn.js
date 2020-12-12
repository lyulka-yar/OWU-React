import React, {Component} from 'react';

class CalcBtn extends Component {
    render() {
        let {result,
            numbers,
            incAndDec,
            reset} = this.props;
        return (
            <div>
                <div className={'output'}>{result}</div>

                {numbers.map(value => <button onClick={() => incAndDec(value)} className='btnComputing'>{value}</button>)}
                <button onClick={()=> reset()} className='btnComputing reset'>reset</button>
            </div>
        );
    }
}

export default CalcBtn;