import React, { Component } from 'react';
import { connect } from 'react-redux';

import TransmissionLogo from '../../../assets/img/lscustom/transmission.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={TransmissionLogo} alt="TransmissionLogo" width="50px" height="50px"/>
                    <p>Трансмиссия</p>
                </div>
                
                <div id="-1" class="item">
                    <p>Стандартная</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Полу-спортивная</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Спортивная</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Гоночная</p>
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