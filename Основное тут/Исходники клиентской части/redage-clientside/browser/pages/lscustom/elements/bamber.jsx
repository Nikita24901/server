import React, { Component } from 'react';
import { connect } from 'react-redux';

import BamperLogo from '../../../assets/img/lscustom/bamper.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={BamperLogo} alt="BamperLogo" width="50px" height="50px"/>
                    <p>Бамперы</p>
                </div>
                
                <a id="bamper_menu_front">
                    <div class="item">
                        <p>Передние бамперы</p>
                    </div>
                </a>

                <a id="bamper_menu_back">
                    <div class="item">
                        <p>Задние бамперы</p>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);