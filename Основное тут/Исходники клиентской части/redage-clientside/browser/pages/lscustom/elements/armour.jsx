import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArmourLogo from '../../../assets/img/lscustom/armor.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="logo_categories">
                    <img src={ArmourLogo} alt="ArmourLogo" width="50px" height="50px"/>
                    <p>Броня</p>
                </div>
                    
                <div id="-1" className="item">
                    <p>Нет</p>
                    <p>*price*</p>
                </div>
                
                <div id="20p" className="item">
                    <p>Усиление брони - 20%</p>
                    <p>*price*</p>
                </div>
                
                <div id="40p" className="item">
                    <p>Усиление брони - 40%</p>
                    <p>*price*</p>
                </div>
                
                <div id="60p" className="item">
                    <p>Усиление брони - 60%</p>
                    <p>*price*</p>
                </div>
                
                <div id="80p" className="item">
                    <p>Усиление брони - 80%</p>
                    <p>*price*</p>
                </div>
                
                <div id="100p" className="item">
                    <p>Усиление брони - 100%</p>
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