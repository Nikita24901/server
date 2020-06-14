import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

import logo from '../../../assets/img/authentication/authorization/logo.png'

class Restore extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="gta-acount  restorepass  rest-page">
                    <div className="gta-acount__content">
                        <img className="logo" src={logo} alt="logo"/>

                        <header>
                            <h2>Восстановление пароля</h2>
                            <p>Если Вы вспомнили свой пароль, то можете вернуться</p>
                        </header>

                        <div id="rest-form">
                            <div className="input-cont">
                                <input type="text" className="entry-login" name="entry-login" id="entry-login-id" placeholder="Логин" required/>
                            </div>

                            <div className="btn-cont">
                                <a className="btn-back  js-btn-back" onClick={() =>
                                {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_AUTHENTICATION', payload: 'PAGE_AUTH'});
                                }}>Назад</a>
                                <input className="btn-restore-end" type="submit" value="Вспомнить!"/>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Restore;