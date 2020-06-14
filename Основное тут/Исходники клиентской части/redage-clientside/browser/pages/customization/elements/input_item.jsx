import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

import store from '../../../helpers/store'
import rangeslider from '../../../helpers/rangeslider'

class Input extends Component {
    
    state = {
        gender: false
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.data != undefined && this.state.gender != nextProps.data.gender)
        {
            this.setState({gender: nextProps.data.gender})

            var sliderInput = document.getElementById(this.props.id);
            if(sliderInput == undefined) return;

            var sliderHandle = sliderInput['rangeslider-js'];
            if(sliderHandle == undefined) return;

            sliderHandle.update({value: nextProps.data[this.props.data.gender][this.props.id]});
            rage.CallClient("client:OnCustomizationChanged", this.props.id, Number(nextProps.data[this.props.data.gender][this.props.id]));
        }
    }

    componentDidMount = () => {

        rangeslider.create(document.getElementById(this.props.id), {min: this.props.min, max: this.props.max, value: this.props.data[this.props.data.gender][this.props.id], step: this.props.step, onSlide: (value, percent, position) => 
        {
            store.dispatch({type: 'CUSTOMIZATION_GENDER', payload: {name: this.props.id, value: value}});
            rage.CallClient("client:OnCustomizationChanged", this.props.id, Number(value));
        }});
    }

    render() {
        return (
            <React.Fragment>
                <span>
                    <div className="slider">
                        <input type="range" id={this.props.id}/>
                    </div>
                    <div id={this.props.id}>{this.props.data[this.props.data.gender][this.props.id]}</div>
                </span>
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