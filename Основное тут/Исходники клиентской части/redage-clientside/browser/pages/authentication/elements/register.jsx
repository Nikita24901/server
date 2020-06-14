import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';
import ragemp from '../../../helpers/ragemp'

import logo from '../../../assets/img/authentication/authorization/logo.png'

class Restore extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="gta-acount  registration  reg-page">
                    <div className="gta-acount__content">
                        <img className="logo" src={logo} alt="logo"/>
                            
                        <header>
                            <h2>Регистрация аккаунтa</h2>
                            <p>Если у Вас еще нет своего аккаунта, то вы можете создать его сейчас</p>
                        </header>

                        <div>
                            <div className="input-cont">
                                <input value={this.props.input.regusername} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'regusername', text: event.target.value}})}} type="text" className="new-user__login" name="new-user__login" id="new-user__login-id" required/>
                                <div className="placeholder">Логин&nbsp;&nbsp;<span>(Не имя и фамилия персонажа!)</span></div>
                            </div>

                            <div className="input-cont">
                                <input value={this.props.input.regemail} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'regemail', text: event.target.value}})}} type="email" name="new-user__email" id="new-user__email-id" placeholder="E-mail" required/>
                            </div>

                            <div className="input-cont">
                                <input value={this.props.input.regpass1} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'regpass1', text: event.target.value}})}} type="password" name="new-user__pw" id="new-user__pw-id" placeholder="Придумайте пароль" required/>
                            </div>

                            <div className="input-cont">
                                <input value={this.props.input.regpass2} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'regpass2', text: event.target.value}})}} type="password" name="new-user__pw-repeat" id="new-user__pw-repeat-id" placeholder="Повторите пароль" required/>
                            </div>

                            <div className="input-cont">
                                <input value={this.props.input.regpromo} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'regpromo', text: event.target.value}})}} type="text" className="promo-code" name="new-user__promo-code" id="new-user__promo-code" placeholder="Промо-код (не обязательно)"/>
                            </div>

                            <div className="btn-cont">
                                <a className="btn-back  js-btn-back" onClick={() =>
                                {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_AUTHENTICATION', payload: 'PAGE_AUTH'});
                                }}>Назад</a>

                                <input className="btn-register-end" type="submit" value="Зарегистрироваться, GO!" onClick={() =>
                                {
                                    console.log(this.props.input.regusername, this.props.input.regemail, this.props.input.regpromo, this.props.input.regpass1, this.props.input.regpass2)
                                    ragemp.CallClient('client:OnSignUp', this.props.input.regusername, this.props.input.regemail, this.props.input.regpromo, this.props.input.regpass1, this.props.input.regpass2);
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        input: state.authenticationInputs
    };
};

export default connect(mapStateToProps)(Restore);