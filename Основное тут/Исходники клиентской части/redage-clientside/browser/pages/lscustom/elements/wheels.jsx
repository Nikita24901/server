import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';

import WheelsLogo from '../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelsLogo} alt="WheelsLogo" width="50px" height="50px"/>
                    <p>Колёса</p>
                </div>

                <a id="wheels_exclusive" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_EXCLUSIVE'})}>
                    <div class="item">
                        <p>Эксклюзивные диски</p>
                    </div>
                </a>

                <a id="wheels_lowrider" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_LOWRIDER'})}>
                    <div class="item">
                        <p>Лоурайдер</p>
                    </div>
                </a>

                <a id="wheels_musclecar" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_MUSCLECAR'})}>
                    <div class="item">
                        <p>Маслкар</p>
                    </div>
                </a>

                <a id="wheels_4x4" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_4x4'})}>
                    <div class="item">
                        <p>Вездеход</p>
                    </div>
                </a>

                <a id="wheels_sport" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_SPORT'})}>
                    <div class="item">
                        <p>Спорт</p>
                    </div>
                </a>

                <a id="wheels_4x4_2" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_OUTROAD'})}>
                    <div class="item">
                        <p>Внедорожник</p>
                    </div>
                </a>

                <a id="wheels_tuner" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'WHEEL_TUNER'})}>
                    <div class="item">
                        <p>Тюннер</p>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);