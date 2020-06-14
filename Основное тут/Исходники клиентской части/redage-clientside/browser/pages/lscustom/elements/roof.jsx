import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoofLogo from '../../../assets/img/lscustom/roof.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={RoofLogo} alt="RoofLogo" width="50px" height="50px"/>
                    <p>Крыша</p>
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