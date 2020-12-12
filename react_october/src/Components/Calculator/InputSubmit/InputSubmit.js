import React, {Component} from 'react';


class InputSubmit extends Component {
    render() {
        let {inputType,inputAddNum} = this.props;
        return (
            <div>
                    <span className='title m'>type number:</span> <br/>
                {

                    <input onChange={event => inputAddNum(event.target.value)}
                           className={'submit'}
                           type="text"/>
                }
                <button onClick={inputType} className={'submit'}>submit</button>

            </div>
        );
    }
}

export default InputSubmit;