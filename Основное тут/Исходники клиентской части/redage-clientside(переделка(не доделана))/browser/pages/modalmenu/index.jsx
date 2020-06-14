import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store'

import Color from './elements/color'
import Confirm from './elements/confirm'
import JobSelector from './elements/jobselector'
import Menu from './elements/menu'
import Petrol from './elements/petrol'
import WeaponShop from './elements/weaponshop';

class Index extends Component {

    state = {
    }

    componentDidMount = () =>
    {
        window.modal = {
            updateModalMenu: (menu) => {
                store.dispatch({type: 'SELECT_NEXT_MODAL_MENU', payload: menu});
            }
        }
    }

    render() {

        let page = this.props.data;
        switch (page) {
            case 'color':
                page = <Color/>;
                break;
            case 'confirm':
                page = <Confirm/>;
                break;
            case 'jobselector':
                page = <JobSelector/>;
                break;
            case 'menu':
                page = <Menu/>;
                break;
            case 'petrol':
                page = <Petrol/>;
                break;
            case 'weaponshop':
                page = <WeaponShop/>;
                break;
            default:
                page = false;
                break;
        }

        return (
            <React.Fragment>{page}</React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.modalmenu
    };
};

export default connect(mapStateToProps)(Index);