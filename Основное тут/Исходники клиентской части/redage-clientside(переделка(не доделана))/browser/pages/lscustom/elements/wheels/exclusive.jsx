import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Эксклюзивные</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Shadow</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Hypher</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Blade</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Diamond</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Supa Gee</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Chromatic Z</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>Mercie Ch.Lip</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Obey RS</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>GT Chrome</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>Cheetah RR</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Solar</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Split Ten</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>Dash VIP</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>LozSpeed Ten</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>Carbon Inferno</p>
                    <p>*price*</p>
                </div>

                <div id="15" class="item">
                    <p>Carboon Shadow</p>
                    <p>*price*</p>
                </div>

                <div id="16" class="item">
                    <p>Carbonic Z</p>
                    <p>*price*</p>
                </div>

                <div id="17" class="item">
                    <p>Carbon Solar</p>
                    <p>*price*</p>
                </div>

                <div id="18" class="item">
                    <p>Cheetah Carbon R</p>
                    <p>*price*</p>
                </div>

                <div id="19" class="item">
                    <p>Carboon S Racer</p>
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