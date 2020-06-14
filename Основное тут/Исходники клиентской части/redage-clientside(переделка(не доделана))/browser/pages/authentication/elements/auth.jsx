import React, { Component } from 'react';
import store from '../../../helpers/store'
import ragemp from '../../../helpers/ragemp'
import { connect } from 'react-redux';

import logo from '../../../assets/img/authentication/authorization/logo.png'

class Auth extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="gta-acount authorization auth-page show">
                    <div className="gta-acount__content">
                        <img className="logo" src={logo} alt="logo"/>

                        <header>
                            <h2>Авторизация на аккаунт</h2>
                            <p>Если у вас уже существует аккаунт, то вы можете в&nbsp;него&nbsp;зайти</p>
                        </header>

                        <div>
                            <div className="input-cont">
                                <input value={this.props.input.username} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'username', text: event.target.value}})}} type="text" className="entry-login" name="entry-login" id="entry-login-id" placeholder="Логин / E-mail" required />
                            </div>

                            <div className="input-cont">
                                <input value={this.props.input.password} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'password', text: event.target.value}})}} type="password" id="entry-password-id" name="entry-password" placeholder="Пароль" required />
                            </div>

                            <div className="checkbox-and-link">
                                <div className="restore-pw js-btn-restore" onClick={() =>
                                {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_AUTHENTICATION', payload: 'PAGE_RESTORE'});
                                }}>Восстановить пароль</div>
                            </div>

                            <div className="btn-cont">
                                <input className="btn-enter js-btn-auth" onClick={() =>
                                {
                                    ragemp.CallClient("client:OnSignIn", this.props.input.username, this.props.input.password)
                                }} value="Войти"/>
                                <a className="btn-register  js-btn-register" onClick={() =>
                                {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_AUTHENTICATION', payload: 'PAGE_REGISTER'});
                                }}>Регистрация</a>
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

export default connect(mapStateToProps)(Auth);