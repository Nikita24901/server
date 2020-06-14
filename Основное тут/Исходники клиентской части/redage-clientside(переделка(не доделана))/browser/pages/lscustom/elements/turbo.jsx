import React, { Component } from 'react';
import { connect } from 'react-redux';

import TurboLogo from '../../../assets/img/lscustom/turbo.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={TurboLogo} alt="TurboLogo" width="50px" height="50px"/>
                    <p>Турбонаддув</p>
                </div>
                
                <div id="-1" class="item">
                    <p>Нет</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Турбо-тюннинг</p>
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