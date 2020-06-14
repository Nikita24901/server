import React, { Component } from 'react';
import { connect } from 'react-redux';

import GlassesLogo from '../../../assets/img/lscustom/glass.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={GlassesLogo} alt="GlassesLogo" width="50px" height="50px"/>
                    <p>Стёкла / тонировка</p>
                </div>

                <div id="0" class="item">
                    <p>Нет</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Слабое затемнение</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Среднее затемнение</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Лимузин</p>
                    <p>*price*</p>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);