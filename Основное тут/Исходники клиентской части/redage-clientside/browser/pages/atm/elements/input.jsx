import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp';

class Input extends Component {

    state = {
        value: "",
    }

    next = () => {
        console.log("VAAAAL: " + this.state.value);
        rage.CallClient('atmVal', this.state.value);
    }

    prev = () => {
        console.log("PREV: " + this.props.type);
        rage.CallClient('atmCB', this.props.type, 0);
    }
    
    render() {

        return (
            <React.Fragment>
                <input value={this.state.value} onChange={(event) => {this.setState({value: event.target.value})}} placeholder={this.props.placeholder} maxlength="6"/>
                <div onClick={this.next} id="next" class="block"><p id="next">Далее</p></div>
                <div onClick={this.prev} id="prev" class="block"><p id="prev">Отмена</p></div>
                <p class="subinfo">{this.props.subdata}</p>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
};

export default connect(mapStateToProps)(Input);