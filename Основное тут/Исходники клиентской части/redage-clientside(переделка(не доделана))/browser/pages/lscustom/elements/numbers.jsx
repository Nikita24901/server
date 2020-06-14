import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarnumbersLogo from '../../../assets/img/lscustom/car-number.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={CarnumbersLogo} alt="CarnumbersLogo" width="50px" height="50px"/>
                    <p>Номера</p>
                </div>

                <div id="0" class="item">
                    <p>Синий на белом - 1</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Жёлтый на чёрном</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Жёлтый на синем</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Синий на белом - 2</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Синий на белом - 3</p>
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