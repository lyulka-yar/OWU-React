import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import './HeaderItem.css'

class HeaderItem extends Component {
    state= {active:null};
    addClass = () => {

    }
    render() {
const { item } = this.props;
        return (
            <div className={'header-menu'}>
                <Link onClick={this.addClass} to={'/'+ item} ><b>{item}</b></Link>
            </div>
        );
    }
}

export default withRouter(HeaderItem);