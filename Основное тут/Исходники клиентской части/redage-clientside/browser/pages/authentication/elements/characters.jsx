import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

import CharacterBlock from './character_item.jsx';

import logo from '../../../assets/img/authentication/characters/logo-slots.png'

class Characters extends Component {

    state = {
        login: "",
        redbucks: 0,
        slots: null
    }

    componentWillMount = () => {
        window.characters = {
            updateSlots: (slotsdata) =>
            {
                slotsdata = JSON.parse(slotsdata);

                this.setState({
                    login: slotsdata[4],
                    redbucks: slotsdata[3],

                    slots: [slotsdata[0], slotsdata[1], slotsdata[2]]
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="gta-acount  slots  slots-page">
                    {this.state.slots != null && <div className="slots__wrapper">
                        <header>
                            <img src={logo} alt="logo"/>

                            <p>RolePlay сервер <span>№</span> 1</p>

                            <div className="red-bucks">
                                <span>{this.state.login}, у Вас</span>
                                <div className="red-bucks__total">
                                    <b>{this.state.redbucks}</b>
                                    <a>Пополнить счет</a>
                                </div>
                            </div>
                        </header>

                        <div className="slots__cols">
                            <CharacterBlock characterid={1} data={this.state.slots[0]}/>
                            <CharacterBlock characterid={2} data={this.state.slots[1]}/>
                            <CharacterBlock characterid={3} data={this.state.slots[2]}/>
                        </div>
                    </div>}
                </div>
            </React.Fragment>
        );
    }
}

export default Characters;