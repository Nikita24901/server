import React, { Component } from 'react';
import { connect } from 'react-redux';

import LightsLogo from '../../../assets/img/lscustom/lights.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={LightsLogo} alt="LightsLogo" width="50px" height="50px"/>
                    <p>Фары</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные фары</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="1" class="item">
                    <p>Синие ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="2" class="item">
                    <p>Голубые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="3" class="item">
                    <p>Морские ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="4" class="item">
                    <p>Желто-зелёные ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="5" class="item">
                    <p>Желтые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="6" class="item">
                    <p>Оранжевые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="7" class="item">
                    <p>Красно-оранжевые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="8" class="item">
                    <p>Красные ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="9" class="item">
                    <p>Розовые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="10" class="item">
                    <p>Сиреневые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="11" class="item">
                    <p>Фиолетовые ксеноновые фары</p>
                    <p>*price*</p>
                </div>
				
				<div id="12" class="item">
                    <p>Тёмно-синие ксеноновые фары</p>
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