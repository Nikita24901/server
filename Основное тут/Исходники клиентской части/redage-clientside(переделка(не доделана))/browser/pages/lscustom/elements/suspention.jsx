import React, { Component } from 'react';
import { connect } from 'react-redux';

import SuspetionLogo from '../../../assets/img/lscustom/suspention.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={SuspetionLogo} alt="SuspetionLogo" width="50px" height="50px"/>
                    <p>Подвеска</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартная подвеска</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Заниженная подвеска</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Полу-спортивная подвеска</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Спортивная подвеска</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Раллийная подвеска</p>
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