import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Disconnect from './elements/disconnect.jsx'

class Index extends Component {

    render() {
        /*let page = this.props.data;
        switch (page) {                
            case 'PAGE_DISCONNECT':
                page = <Disconnect />;
                break;
            default: 
                page = false;
                break;
        }*/
        return (
            <React.Fragment></React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.situations
    };
};

export default connect(mapStateToProps)(Index);