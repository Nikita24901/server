import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="btns">
                    <input onChange={this.onInputName} v-model="fname" placeholder="Новое Имя" maxlength="30"/>
                    <input onChange={this.onInputName} v-model="lname" placeholder="Новая Фамилия" maxlength="30"/>
                    <div className="btn" onClick="buy(1)">Изменить за <b>25 Redbucks</b></div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_NAVIGATIONS'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;