import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store'

import BreakingLock from './elements/breaking_lock'
import CameraSettings from './elements/camerasettings.jsx'
import Chat from './elements/chat.jsx'
import Circle from './elements/circle.jsx'
import Help from './elements/help.jsx'
import IndicatorsPlayer from './elements/indicators_player'
import IndicatorsVehicle from './elements/indicators_vehicle'
import Minimap from './elements/indicators_world'
import Lift from './elements/lift'
import Notify from './elements/notify'
import Phone from './elements/phone'
import Watermark from './elements/watermark.jsx'

class Index extends Component {

    state = {
        safezone: {}
    }

    constructor(props) {
        super(props);

        window.hud = {
            toggle: (toggled) => {
                store.dispatch({type: 'UPDATE_DATE_STATE', payload: toggled ? 'hud' : 'none'});
            },
            updateComponent: (component, value) => {
                store.dispatch({type: 'HUD_MAIN', payload: {name: component, status: value}});
            },
            updateServerInfo: (component, value) => {
                store.dispatch({type: 'SERVER_MAIN', payload: {name: component, status: value}});
            },
            updateSafeZone: (info) => {
                this.setState({safezone: info});
            }
        }
    }

    componentWillUnmount = () =>
    {
        window.hud = undefined;
    }

    render() {
        return (
            <React.Fragment>
                <div className="safezone hud" style={{
                    display: (this.props.status && this.props.hud.toggle) ? "block" : "none", 
                    left: `${this.state.safezone.safezone_padding_leftright * 100}vw`,
                    right: `${this.state.safezone.safezone_padding_leftright * 100}vw`,
                    top: `${this.state.safezone.safezone_padding_topbottom * 100}vh`,
                    bottom: `${this.state.safezone.safezone_padding_topbottom * 100}vh`
                    }}>
                    <Notify style={{display: "block"}}/>
                    <BreakingLock/>
                    <Chat/>
                    <Circle/>
                    <Help/>
                    <IndicatorsPlayer/>
                    <IndicatorsVehicle/>
                    <Minimap minimap_width={this.state.safezone.minimap_width} minimap_height={this.state.safezone.minimap_height}/>
                    <Lift/>
                    <Phone/>
                    <Watermark/>
                </div>

                <CameraSettings/>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.dateState.hud,
        hud: state.hud
    };
};

export default connect(mapStateToProps)(Index);