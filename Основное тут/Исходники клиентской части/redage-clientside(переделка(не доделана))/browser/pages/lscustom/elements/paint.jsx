import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaintLogo from '../../../assets/img/lscustom/paint.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={PaintLogo} alt="" width="50px" height="50px"/>
                    <p>Покраска</p>
                </div>
                
                <a id="paint_menu_one">
                    <div class="item">
                        <p>Основной цвет</p>
                    </div>
                </a>
                    
                <a id="paint_menu_two">
                    <div class="item">
                        <p>Дополнительный цвет</p>
                    </div>
                </a>
                
                <a id="paint_menu_three">
                    <div class="item">
                        <p>Цвет неона</p>
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