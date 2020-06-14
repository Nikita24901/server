import React, { Component } from 'react';
import { connect } from 'react-redux';

import HornLogo from '../../../assets/img/lscustom/horn.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={HornLogo} alt="HornLogo" width="50px" height="50px"/>
                    <p>Клаксоны</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартный</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Грузовик</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Полицейский</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Клоун</p>
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