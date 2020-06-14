import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

import store from '../../../helpers/store'
import rangeslider from '../../../helpers/rangeslider'

class Input extends Component {

    componentDidMount = () => {

        rangeslider.create(document.getElementById(this.props.id), {min: this.props.min, max: this.props.max, value: this.props.data[this.props.data.gender][this.props.id], step: this.props.step, onSlide: (value, percent, position) => 
        {
            rage.CallClient("client:OnCameraChanged", this.props.id, Number(value));
        }});
    }

    render() {
        return (
            <React.Fragment>
                <div class="disconnect">
                    <div class="bg-image"></div>
                    <div class="blur"></div>
                    <div class="main">
                        <img src="images/wifi.png" alt="wifi" class="wifi"/>
                        <img src="images/logo.svg" alt="logo" class="logo"/>
                        <div class="main__info">
                            <div id="header" class="main__info__title">Соединение было прервано</div>
                            <div class="main__info__reason">
                                <div class="main__info__reason__title">Причина:</div>
                                <div id="reason" class="main__info__reason__name">анти-афк</div>
                            </div>
                        </div>
                        <div class="tip">Быстро перезайти на сервер можно через кнопку F1<br/>и выбрать наш сервер в списке.</div>
                    </div>
                    <img src="images/man.png" alt="мужик с радио" class="radio-man"/>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.customizationdata
    };
};

export default connect(mapStateToProps)(Input);