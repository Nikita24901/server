import React, { Component } from 'react';
import { connect } from 'react-redux';

import HoodLogo from '../../../assets/img/lscustom/hood.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={HoodLogo} alt="" width="50px" height="50px"/>
                    <p>Капот</p>
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