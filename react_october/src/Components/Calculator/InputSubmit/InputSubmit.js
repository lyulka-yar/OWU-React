import React, {Component} from 'react';

class InputSubmit extends Component {
    render() {
        return (
            <div>
                    <span className='title m'>type number:</span> <br/>
                    <input className={'submit'} type="text"/>
                    <input className={'submit'} value={'submit'} type="button"/>

            </div>
        );
    }
}

export default InputSubmit;