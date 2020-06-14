import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../../helpers/store'
import customizationdata from '../../../assets/js/customizationdata';
import rage from '../../../helpers/ragemp'

class List extends Component {
    
    onChangeNextButton = (value) => {
        var newValue = this.props.data[this.props.data.gender][this.props.value] + value;

        var array = customizationdata[this.props.id];
        const length = array.length;

        if (newValue > length - 1) newValue = 0;
        else if (newValue < 0) newValue = length - 1;

        store.dispatch({type: 'CUSTOMIZATION_GENDER', payload: {name: this.props.value, value: newValue}});
    }

    render() {

        return (
            <React.Fragment>
                <div className="list">
                    <i className="left icon-flatarrow" onClick={() => {
                        this.onChangeNextButton(-1);
                        
                        var newid = customizationdata[this.props.id][this.props.data[this.props.data.gender][this.props.value]].id;
                        if(newid != undefined) rage.CallClient("client:OnCustomizationChanged", this.props.value, Number(newid));
                        
                    }}></i>
                    <div>{customizationdata[this.props.id][this.props.data[this.props.data.gender][this.props.value]].name}</div>
                    <i className="right icon-flatarrow" onClick={() => {
                        this.onChangeNextButton(1);

                        var newid = customizationdata[this.props.id][this.props.data[this.props.data.gender][this.props.value]].id;
                        if(newid != undefined) rage.CallClient("client:OnCustomizationChanged", this.props.value, Number(newid));

                    }}></i>
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

export default connect(mapStateToProps)(List);