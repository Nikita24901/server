import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Вездеход</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Raider</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Mudslinger</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Nevis</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Cairngorm</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Amazon</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>СChallenger</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>Dune Basher</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Five Star</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Rock Crawler</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>Mil Spec Steelie</p>
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