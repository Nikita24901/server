import React, { Component } from 'react';
import { connect } from 'react-redux';

import LatticeLogo from '../../../assets/img/lscustom/lattice.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={LatticeLogo} alt="LatticeLogo" width="50px" height="50px"/>
                    <p>Радиаторные решетки</p>
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