import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
               <div className="btns">
                    <div className="info">Вы будете направлены в редактор персонажа.</div>
                    <div className="btn" onClick="buy(0)">Изменить за <b>100 Redbucks</b></div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_NAVIGATIONS'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;