import React, { Component } from 'react';
import { connect } from 'react-redux';

import MufflerLogo from '../../../assets/img/lscustom/muffler.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="logo_categories">
                    <img src={MufflerLogo} alt="MufflerLogo" width="50px" height="50px"/>
                    <p>Глушители</p>
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