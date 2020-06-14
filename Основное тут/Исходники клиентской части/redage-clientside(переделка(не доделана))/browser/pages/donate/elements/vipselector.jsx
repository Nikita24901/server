import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="btns">
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_VIP_BRONZE'})}>Bronze VIP</div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_VIP_SILVER'})}>Silver VIP</div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_VIP_GOLD'})}>Gold VIP</div>
                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_VIP_PLATINUM'})}>Platinum VIP</div>

                    <div className="btn" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_DONATE', payload: 'PAGE_NAVIGATIONS'})}>Назад</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;