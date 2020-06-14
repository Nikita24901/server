import React, { Component } from 'react';
import { connect } from 'react-redux';

import SpoilerLogo from '../../../assets/img/lscustom/spoiler.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={SpoilerLogo} alt="SpoilerLogo" width="50px" height="50px"/>
                    <p>Спойлер</p>
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