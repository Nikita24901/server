import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Лоурайдер</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Flare</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Wired</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Triple Golds</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Big Worm</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Seven Fives</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Split Six</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>Fresh Mesh</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Lead Sled</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Turbine</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>Super Fin</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Classic Road</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Dollar</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>Dukes</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>Low Five</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>Gooch</p>
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