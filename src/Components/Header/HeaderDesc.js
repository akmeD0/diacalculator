import React, { Component } from 'react'

import Logo from '../Logo'
import Burger from './Burger'

import logo from '../../img/header/logo.svg'
import Aside from './Aside'

export default class HeaderDesc extends Component {
    constructor(props) {
        super(props)
        this.onScrollHeader = this.onScrollHeader.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHeader)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHeader)
    }
    navigation = this.props.navigation;
    render() {
        return (
            <header className='header' id='header'>
                <div className='header__cont cont'>
                    <Logo logo={logo} />
                    <nav className='header__nav'>
                        {this.navigation.map((el) => (
                            <a onClick={() => {
                                window.scrollTo(0, 0)
                            }} href={el.link} key={el.id}>{el.text}</a>
                        ))}
                    </nav>
                    <Burger />
                </div>
                <Aside soc={this.props.soc} nav={this.props.navigation} />
            </header>
        )
    }
    onScrollHeader() {
        if (window.scrollY >= 33) {
            document.getElementById('header').classList.add('active');
        } else {
            document.getElementById('header').classList.remove('active');
        }
    }
}
