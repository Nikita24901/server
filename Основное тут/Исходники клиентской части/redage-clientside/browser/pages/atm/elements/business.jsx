import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp';

class Business extends Component {

    onPress = (e) => {
        let id = Number(e.target.id)
        rage.CallClient("atmCB", this.props.type, id);
    }

    render() {

        return (
            <React.Fragment>
                {this.props.subdata.map((value, index) =>
                    <div><div onClick={this.onPress} id={index} class="block"><p id={index}>{value}</p></div></div>
                )}
                <div onClick={this.onPress} id="-1" class="block"><p id="-1">Выйти</p></div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
};

export default connect(mapStateToProps)(Business);