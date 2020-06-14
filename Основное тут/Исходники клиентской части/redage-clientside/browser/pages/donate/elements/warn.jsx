import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="btns" v-if="menu == 9">
                    <div className="info">Снятие варна<br/></div>
                </div>
                <div className="btns" v-if="menu == 9">
                    <div className="btn" onClick="buy(7)">Купить за <b>250 Redbucks</b></div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_NAVIGATIONS'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;