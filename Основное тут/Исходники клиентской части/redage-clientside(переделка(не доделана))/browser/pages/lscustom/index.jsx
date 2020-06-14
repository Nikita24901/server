import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Home from './elements/home.jsx'
import Armour from './elements/armour.jsx'
import Engine from './elements/engine.jsx'
import Muffler from './elements/muffler.jsx'
import Paint from './elements/paint.jsx'
import Wheels from './elements/wheels.jsx'
import WheelsExclusive from './elements/wheels/exclusive.jsx'
import WheelsLowrider from './elements/wheels/lowrider.jsx'
import Wheels4x4 from './elements/wheels/4x4.jsx'
import WheelsSport from './elements/wheels/sport.jsx'
import WheelsOutRoad from './elements/wheels/outroad.jsx'
import WheelsTuner from './elements/wheels/tuner.jsx'
import Turbo from './elements/turbo.jsx'
import Horn from './elements/horn.jsx'
import Transmission from './elements/transmission.jsx'
import Glasses from './elements/glasses.jsx'
import Suspention from './elements/suspention.jsx'
import Sideskirt from './elements/sideskirt.jsx'
import Brakes from './elements/brakes.jsx'
import Bamper from './elements/bamber.jsx'
import Lights from './elements/lights.jsx'
import Hood from './elements/hood.jsx'
import Spoiler from './elements/spoiler.jsx'
import Numbers from './elements/numbers.jsx'
import Protection from './elements/protection.jsx'
import Lattice from './elements/lattice.jsx'
import Flame from './elements/flame.jsx'
import Wings from './elements/wings.jsx'
import Roof from './elements/roof.jsx'

import BackImg from '../../assets/img/lscustom/back.png'

class Index extends Component {

    state = {
        stats_speed: 50,
        stats_brakes: 50,
        stats_boost: 50,
        stats_clutch: 50
    }

    constructor(props) {
        super(props);
        
        window.tuning_lsc = {
            setVehicleStats: (speed, brakes, boost, clutch) => {
                this.setState({
                    stats_speed: speed,
                    stats_brakes: brakes,
                    stats_boost: boost,
                    statis_clutch: clutch
                });
            }
        }
    }

    render() {

        let page = this.props.data;
        switch (page) {
            case 'PAGE_HOME':
                page = <Home/>;
                break;
            case 'PAGE_ARMOUR':
                page = <Armour/>;
                break;
            case 'PAGE_ENGINE':
                page = <Engine/>;
                break;
            case 'PAGE_MUFFLER':
                page = <Muffler/>;
                break;
            case 'PAGE_PAINT':
                page = <Paint/>;
                break;
            case 'PAGE_WHEELS':
                page = <Wheels/>;
                break;
            case 'WHEEL_EXCLUSIVE':
                page = <WheelsExclusive/>;
                break;
            case 'WHEEL_LOWRIDER':
                page = <WheelsLowrider/>;
                break;
            case 'WHEEL_4x4':
                page = <Wheels4x4/>;
                break;
            case 'WHEEL_SPORT':
                page = <WheelsSport/>;
                break;
            case 'WHEEL_OUTROAD':
                page = <WheelsOutRoad/>;
                break;
            case 'WHEEL_TUNER':
                page = <WheelsTuner/>;
                break;
            case 'PAGE_TURBO':
                page = <Turbo/>;
                break;
            case 'PAGE_HORN':
                page = <Horn/>;
                break;
            case 'PAGE_TRANSMISSION':
                page = <Transmission/>;
                break;
            case 'PAGE_GRASSES':
                page = <Glasses/>;
                break;
            case 'PAGE_SUSPENTION':
                page = <Suspention/>;
                break;
            case 'PAGE_SIDESKIRT':
                page = <Sideskirt/>;
                break;
            case 'PAGE_BRAKES':
                page = <Brakes/>;
                break;
            case 'PAGE_BAMPER':
                page = <Bamper/>;
                break;
            case 'PAGE_LIGHTS':
                page = <Lights/>;
                break;
            case 'PAGE_HOOD':
                page = <Hood/>;
                break;
            case 'PAGE_SPOILER':
                page = <Spoiler/>;
                break;
            case 'PAGE_NUMBERS':
                page = <Numbers/>;
                break;
            case 'PAGE_PROTECTION':
                page = <Protection/>;
                break;
            case 'PAGE_LATTICE':
                page = <Lattice/>;
                break;
            case 'PAGE_FLAME':
                page = <Flame/>;
                break;
            case 'PAGE_WINGS':
                page = <Wings/>;
                break;
            case 'PAGE_ROOF':
                page = <Roof/>;
                break;
            default:
                page = false;
                break;
        }
    
        if(page !== false) {
            rage.CallClient("tpage", "")
        }

        return (
            <React.Fragment>
                <div className="lscustom">
                    <div className="header"></div>
                    <div className="main">
                        <div className="categories" onClick={() => {
                            if(this.props.data != 'PAGE_HOME') {
                                if(this.props.data.startsWith("WHEEL_")) {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_WHEELS'});
                                }
                                else {
                                    store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_HOME'});
                                }
                            }
                            else {
                                rage.CallClient("exitTun");
                            }
                        }}>
                            <p>Категории</p>
                            <a>
                                <img src={BackImg} alt="back" width="10px" height="15px"/>
                                <p>Назад</p>
                            </a>
                        </div>
                        <div className="content_box">
                            {page}
                        </div>
                    </div>
                    <div className="footer">
                        <div className="left_part">
                            <p>Скорость</p>
                            <progress id="speed_bar" value={this.state.stats_speed} max="100"></progress>
                            <p>Торможение</p>
                            <progress id="brakes_bar" value={this.state.stats_brakes} max="100"></progress>
                        </div>
                        <div className="right_part">
                            <p>Ускорение</p>
                            <progress id="boost_bar" value={this.state.stats_boost} max="100"></progress>
                            <p>Сцепление</p>
                            <progress id="clutch_bar" value={this.state.stats_clutch} max="100"></progress>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.lscustom
    };
};

export default connect(mapStateToProps)(Index);