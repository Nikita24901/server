import React, { Component } from 'react';
import { connect } from 'react-redux';

import WingsLogo from '../../../assets/img/lscustom/wings.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WingsLogo} alt="" width="50px" height="50px"/>
                    <p>Крылья</p>
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