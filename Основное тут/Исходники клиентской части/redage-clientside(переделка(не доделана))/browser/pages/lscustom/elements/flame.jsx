import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlameLogo from '../../../assets/img/lscustom/flame.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={FlameLogo} alt="FlameLogo" width="50px" height="50px"/>
                    <p>Винилы</p>
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