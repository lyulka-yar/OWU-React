import React, {Component} from 'react';
import './Header.css';
import HeaderItem from "../HeaderItem/HeaderItem";


class Header extends Component {

    headerArr = ['home', 'users','posts','comments']

    render() {

            return (
                <div className={'header-title'}>
                    {this.headerArr.map(value => <HeaderItem item={value} key={value}/>)}

                </div>
            );

    }
}

    export default Header;