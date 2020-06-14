import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrakesLogo from '../../../assets/img/lscustom/brakes.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={BrakesLogo} alt="BrakesLogo" width="50px" height="50px"/>
                    <p>Тормоза</p>
                </div>
                
                <div id="-1" class="item">
                    <p>Стандартные тормоза</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Полу-спортивные тормоза</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Спортивные тормоза</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Гоночные тормоза</p>
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