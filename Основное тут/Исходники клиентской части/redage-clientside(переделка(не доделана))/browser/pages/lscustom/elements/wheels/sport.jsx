import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Спорт</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Inferno</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Deep Five</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Lozspeed Mk.V</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Diamond Cut</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Chrono</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Feroci RR</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>FiftyNine</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Mercie</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Synthetic Z</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>organic Type 0</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Endo v.1</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Gt One</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>Duper 7</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>Uzer</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>GroundRide</p>
                    <p>*price*</p>
                </div>

                <div id="15" class="item">
                    <p>S Racer</p>
                    <p>*price*</p>
                </div>

                <div id="16" class="item">
                    <p>Venum</p>
                    <p>*price*</p>
                </div>

                <div id="17" class="item">
                    <p>Cosmo</p>
                    <p>*price*</p>
                </div>

                <div id="18" class="item">
                    <p>Dash VIP</p>
                    <p>*price*</p>
                </div>

                <div id="19" class="item">
                    <p>ice Kid</p>
                    <p>*price*</p>
                </div>

                <div id="20" class="item">
                    <p>ruff Weld</p>
                    <p>*price*</p>
                </div>

                <div id="21" class="item">
                    <p>Wangan Master</p>
                    <p>*price*</p>
                </div>

                <div id="22" class="item">
                    <p>Super Five</p>
                    <p>*price*</p>
                </div>

                <div id="23" class="item">
                    <p>Endo v.2</p>
                    <p>*price*</p>
                </div>

                <div id="24" class="item">
                    <p>Split Six</p>
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