import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
               <div className="btns" >
                    <div className="info">Увеличение зарплаты во фракциях и по безработице $200<br/>Нет ограничений на help / report<br/>Возможность выйти из фракции (/leave)<br/>Удвоенное XP в час.</div>
                </div>
                <div className="btns">
                    <div className="btn" onClick="buy(3)">Купить за <b>300 Redbucks</b></div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_VIPSELECTOR'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;