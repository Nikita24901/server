import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';

import Auth from './elements/auth.jsx'
import Restore from './elements/restore.jsx'
import Register from './elements/register.jsx'
import Characters from './elements/characters.jsx'
import Respawn from './elements/respawn.jsx'

class Index extends Component {

    componentDidMount = () =>
    {
        window.authentication = {
            switchToCharacterSelector: (slotsdata) => {
                console.log(JSON.stringify(slotsdata));
                store.dispatch({type: "SELECT_NEXT_PAGE_AUTHENTICATION", payload: 'PAGE_CHARACTERS'});
                window.characters.updateSlots(slotsdata);
            },
            switchToCustomization: () => {
                store.dispatch({type: 'UPDATE_DATE_DYNAMIC_STATE', payload: 'custom'});
            },
            switchToRespawnSelector: (respawndata) => {
                store.dispatch({type: "SELECT_NEXT_PAGE_AUTHENTICATION", payload: 'PAGE_RESPAWN'});
                window.respawn.updateRespawn(respawndata);
            },
            switchToGame: () => {
                store.dispatch({type: 'UPDATE_DATE_STATE', payload: 'none'});
            }
        }
    }

    render() {

        let page = this.props.data;
        console.log("RENDER: " + page);
        switch (page) {
            case 'PAGE_AUTH': 
                page = <Auth />;
                break;
            case 'PAGE_RESTORE':
                page = <Restore />;
                break;
            case 'PAGE_REGISTER':
                page = <Register />;
                break;
            case 'PAGE_CHARACTERS':
                page = <Characters />;
                break;
            case 'PAGE_RESPAWN':
                page = <Respawn />;
                break;
            default: 
                page = false;
                break;
        }

        if(page != false) return (<React.Fragment>{page}</React.Fragment>);
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        data: state.authentication
    };
};

export default connect(mapStateToProps)(Index);