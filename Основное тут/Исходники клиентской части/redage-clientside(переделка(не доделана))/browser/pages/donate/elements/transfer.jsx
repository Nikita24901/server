import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="btns">
                    <input onChange={this.onInputTrans} v-model="totrans" placeholder="Кол-во для перевода" maxlength="6"/>
                    <input v-model="aftertrans" placeholder="Будет зачислено" readOnly/>
                    <div className="btn" onClick="buy(2)">Конвертировать<b/></div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_NAVIGATIONS'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;