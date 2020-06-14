import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp';

class Menu extends Component {

    onPress = (e) => {
        let id = Number(e.target.id);
        rage.CallClient("atmCB", this.props.type, id);
    }

    render() {

        return (
            <React.Fragment>
                <div onClick={this.onPress} id="0" class="block"><p id="0">Внести средства</p></div>
                <div onClick={this.onPress} id="1" class="block"><p id="1">Вывести средства</p></div>
                <div onClick={this.onPress} id="2" class="block"><p id="2">Внести налог за дом</p></div>
                <div onClick={this.onPress} id="3" class="block"><p id="3">Внести налог за бизнес</p></div>
                <div onClick={this.onPress} id="4" class="block"><p id="4">Перевести на другой счет</p></div>
                <div onClick={this.onPress} id="-1" class="block"><p id="-1">Выйти</p></div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
};

export default connect(mapStateToProps)(Menu);