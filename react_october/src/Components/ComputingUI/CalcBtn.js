import React, {Component} from 'react';
import Computing from "../Calculator/Computing/Computing";
class CalcBtn extends Component {
        state={btnCompute:[]};
    render() {

        return (
            <div className={'btnWrap'}>
                <span className='output'></span>
                <input className='btnComputing' value={'+1'} type="button"/>
                    <input className='btnComputing' value={'-1'} type="button"/>
                    <input className='btnComputing' value={'+100'} type="button"/>
                    <input className='btnComputing' value={'-100'} type="button"/>
                    <input className='btnComputing reset' value={'reset'} type="button"/>
                <Computing />
            </div>
        );
    }
}

export default CalcBtn;