import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                 <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Внедорожник</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>VIP</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Benefactor</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Cosmo</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Bippu</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Royal Six</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Fagorme</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>Deluxe</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Iced Out</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Cognoscenti</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>LozSpeed Ten</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Supernova</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Obey RS</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>LozSpeed Baller</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>Extravaganzo</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>Sunrise</p>
                    <p>*price*</p>
                </div>

                <div id="15" class="item">
                    <p>Dash VIP</p>
                    <p>*price*</p>
                </div>

                <div id="16" class="item">
                    <p>Cutter</p>
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