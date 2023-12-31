import React, { Component } from 'react'
import HeaderDesc from './Header/HeaderDesc'
import Footer from './Footer/Footer'
import HomePage from './Home/HomePage'

import inst from '../img/soc/inst.svg'
import fb from '../img/soc/fb.svg'
import linkedin from '../img/soc/in.svg'
import { Routes, Route } from 'react-router-dom'
import Calculator from './Calculator/Calculator'
import FullList from './FullList/FullList'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: [
                {
                    id: 0,
                    text: "Головна",
                    link: '#/'
                },
                {
                    id: 1,
                    text: "Калькулятор",
                    link: '#/calculator'
                },
                {
                    id: 2,
                    text: "Список продуктів",
                    link: '#/full-list'
                }
            ],
            soc: [
                {
                    id: 0,
                    text: "Instagram",
                    img: inst,
                    link: "https://www.instagram.com/meu.ammor/"
                },
                {
                    id: 1,
                    text: "Facebook",
                    img: fb,
                    link: "https://www.instagram.com/meu.ammor/"
                },
                {
                    id: 2,
                    text: "LinkedIn",
                    img: linkedin,
                    link: "https://www.linkedin.com/in/roman-dovgai-201b25218/"
                }
            ]
        }
    }
    render() {
        return (
            <div className='wrapper'>
                <HeaderDesc navigation={this.state.navigation} soc={this.state.soc} />
                <Routes>
                    <Route path='/' element={<HomePage title="DiaCalculator | Головна" />} />
                    <Route path='/calculator' element={<Calculator title="DiaCalculator | Калькулятор" />} />
                    <Route path='/full-list' element={<FullList title="DiaCalculator | Список продуктів" />} />
                </Routes>
                <Footer navigation={this.state.navigation} soc={this.state.soc} />
            </div>
        )
    }
}
