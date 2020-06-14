import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideskirtLogo from '../../../assets/img/lscustom/sideskirt.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={SideskirtLogo} alt="SideskirtLogo" width="50px" height="50px"/>
                    <p>Пороги</p>
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