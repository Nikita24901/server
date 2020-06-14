import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';

import Main from './elements/main.jsx'

class Index extends Component {

    componentDidMount = () =>
    {
        window.customization = {
            switchToGame: () => {
                store.dispatch({type: 'UPDATE_DATE_STATE', payload: 'none'});
            }
        }
    }

    render() {

        let page = this.props.data;
        switch (page) {
            case 'PAGE_MAIN':
                page = <Main />;
                break;
            default: 
                page = false;
                break;
        }
        if(page !== false) return (<React.Fragment>{page}</React.Fragment>);
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        data: state.customization
    };
};

export default connect(mapStateToProps)(Index);