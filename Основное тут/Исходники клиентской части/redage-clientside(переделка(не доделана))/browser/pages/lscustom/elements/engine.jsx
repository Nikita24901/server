import React, { Component } from 'react';
import { connect } from 'react-redux';

import EngineLogo from '../../../assets/img/lscustom/engine.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="logo_categories">
                    <img src={EngineLogo} alt="EngineLogo" width="50px" height="50px"/>
                    <p>Модификации двигателя</p>
                </div>

                <div id="-1" className="item">
                    <p>Стандартный двигатель</p>
                    <p>*price*</p>
                </div>

                <div id="0" className="item">
                    <p>Улучшение СУД, уровень 1</p>
                    <p>*price*</p>
                </div>

                <div id="1" className="item">
                    <p>Улучшение СУД, уровень 2</p>
                    <p>*price*</p>
                </div>

                <div id="2" className="item">
                    <p>Улучшение СУД, уровень 3</p>
                    <p>*price*</p>
                </div>

                <div id="3" className="item">
                    <p>Улучшение СУД, уровень 4</p>
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