import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import store from './helpers/store';
import rage from './helpers/ragemp';

import AtmPage from './pages/atm';
import AuthenticationPage from './pages/authentication';
import CustomizationPage from './pages/customization';
import HelpPage from './pages/help';
import DonagePage from './pages/donate';
import FractionPage from './pages/fraction';
import HudPage from './pages/hud';
import InventoryPage from './pages/inventory';
import LSCustomPage from './pages/lscustom';
import ModalMenuPage from './pages/modalmenu';
import ReportPage from './pages/reports';
import RouletePage from './pages/roulete';
import SituationsPage from './pages/situations';

const DynamicPages = {
    atm: <AtmPage/>,
    auth: <AuthenticationPage/>,
    custom: <CustomizationPage/>,
    help: <HelpPage/>,
    donate: <DonagePage/>,
    fraction: <FractionPage/>,
    tuning_lsc: <LSCustomPage/>,
    report: <ReportPage/>,
    roulete: <RouletePage/>,
    situations: <SituationsPage/>
};

class App extends Component {

    componentDidMount = () => {

        window.pages = {
            updatePage: (page) => {
                store.dispatch({type: 'UPDATE_DATE_STATE', payload: page});
            },
            updateDynamicPage: (page) => {
                store.dispatch({type: 'UPDATE_DATE_DYNAMIC_STATE', payload: page});
            }
        }
    }

    render() {
        const page = this.props.dateState;
        return (
            <Router history={history}> 
                <React.Fragment>
                    <ModalMenuPage/>
                    {page.dynamic.length > 0 && DynamicPages[page.dynamic]}
                    <InventoryPage status={page.inventory}/>
                    <HudPage status={page.hud}/>
                </React.Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        dateState: state.dateState,
        interfaceState: state.interfaceState
    };
};

export default connect(mapStateToProps)(App);