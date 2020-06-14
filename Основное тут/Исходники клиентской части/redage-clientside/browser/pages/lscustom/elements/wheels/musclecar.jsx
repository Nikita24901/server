import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Маслкар</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Classic Five</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Dukes</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Muscle Freak</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Kracka</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Azreal</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Mecha</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>Black Top</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Drag SPL</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Revolver</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>Classic Rod</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Fairlie</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Spooner</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>Stars</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>Old School</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>El Jefe</p>
                    <p>*price*</p>
                </div>

                <div id="15" class="item">
                    <p>Dodman</p>
                    <p>*price*</p>
                </div>

                <div id="16" class="item">
                    <p>Six Gun</p>
                    <p>*price*</p>
                </div>

                <div id="17" class="item">
                    <p>Mercenary</p>
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