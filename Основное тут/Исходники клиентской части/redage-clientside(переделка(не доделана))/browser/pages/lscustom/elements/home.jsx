import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';

import ArmourLogo from '../../../assets/img/lscustom/armor.png'
import EngineLogo from '../../../assets/img/lscustom/engine.png'
import MufflerLogo from '../../../assets/img/lscustom/muffler.png'
import PaingLogo from '../../../assets/img/lscustom/paint.png'
import WheelsLogo from '../../../assets/img/lscustom/wheel.png'
import TurboLogo from '../../../assets/img/lscustom/turbo.png'
import HornLogo from '../../../assets/img/lscustom/horn.png'
import TransmissionLogo from '../../../assets/img/lscustom/transmission.png'
import GlassesLogo from '../../../assets/img/lscustom/glass.png'
import SuspentionLogo from '../../../assets/img/lscustom/suspention.png'
import SideskirtLogo from '../../../assets/img/lscustom/sideskirt.png'
import BrakesLogo from '../../../assets/img/lscustom/brakes.png'
import BamperLogo from '../../../assets/img/lscustom/bamper.png'
import LigthsLogo from '../../../assets/img/lscustom/lights.png'
import HoodLogo from '../../../assets/img/lscustom/hood.png'
import SpoilerLogo from '../../../assets/img/lscustom/spoiler.png'
import CarnumbersLogo from '../../../assets/img/lscustom/car-number.png'
import ProtectionLogo from '../../../assets/img/lscustom/protection.png'
import LatticeLogo from '../../../assets/img/lscustom/lattice.png'
import FlameLogo from '../../../assets/img/lscustom/flame.png'
import WingsLogo from '../../../assets/img/lscustom/wings.png'
import RoofLogo from '../../../assets/img/lscustom/roof.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <a id="armor_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_ARMOUR'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={ArmourLogo} alt="ArmourLogo" width="54px" height="54px"/>
                            <p>Броня</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет защитить пассажиров при помощи армейских композитных панелей для кузова</p>
                        </div>
                    </div>
                </a>

                <a id="engine_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_ENGINE'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={EngineLogo} alt="EngineLogo" width="54px" height="54px"/>
                            <p>Двигатель</p>
                        </div>
                        <div className="right_c_h">
                            <p>Увеличение мощности двигателя, засчет установки чип-тюнинга</p>
                        </div>
                    </div>
                </a>

                <a id="muffler_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_MUFFLER'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={MufflerLogo} alt="MufflerLogo" width="54px" height="54px"/>
                            <p>Глушитель</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет осуществить замену стандартного глушителя на более продвинутый</p>
                        </div>
                    </div>
                </a>

                <a id="paint_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_PAINT'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={PaingLogo} alt="PaingLogo" width="54px" height="54px"/>
                            <p>Покраска</p>
                        </div>
                        <div className="right_c_h">
                            <p>Вы можете покрасить свое ТС и доп. детали в подходящий для Вас цвет</p>
                        </div>
                    </div>
                </a>

                <a id="wheels_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_WHEELS'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={WheelsLogo} alt="WheelsLogo" width="54px" height="54px"/>
                            <p>Колёса</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет изменить дизайн шин и поставить новые диски</p>
                        </div>
                    </div>
                </a>

                <a id="turbo_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_TURBO'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={TurboLogo} alt="TurboLogo" width="54px" height="54px"/>
                            <p>Турбо</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет увеличить динамику набора скорости Вашего ТС</p>
                        </div>
                    </div>
                </a>

                <a id="horn_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_HORN'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={HornLogo} alt="HornLogo" width="54px" height="54px"/>
                            <p>Клаксоны</p>
                        </div>
                        <div className="right_c_h">
                            <p>Вы можете заменить стоковый сигнал своего автомобиля на новый</p>
                        </div>
                    </div>
                </a>

                <a id="transmission_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_TRANSMISSION'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={TransmissionLogo} alt="TransmissionLogo" width="54px" height="54px"/>
                            <p>Коробка</p>
                        </div>
                        <div className="right_c_h">
                            <p>Сокращает время передачи крутящего момента от двигателя к колесам</p>
                        </div>
                    </div>
                </a>

                <a id="glasses_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_GRASSES'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={GlassesLogo} alt="GlassesLogo" width="54px" height="54px"/>
                            <p>Стекла</p>
                        </div>
                        <div className="right_c_h">
                            <p>Измените внешний вид своего автомобиля, за счет тонирования стекол</p>
                        </div>
                    </div>
                </a>

                <a id="suspention_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_SUSPENTION'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={SuspentionLogo} alt="SuspentionLogo" width="54px" height="54px"/>
                            <p>Подвеска</p>
                        </div>
                        <div className="right_c_h">
                            <p>Улучшает управляемость ТС за счет установки более жесткой подвески</p>
                        </div>
                    </div>
                </a>

                <a id="sideskirt_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_SIDESKIRT'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={SideskirtLogo} alt="SideskirtLogo" width="54px" height="54px"/>
                            <p>Пороги</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет устанавливать спортивные пороги на своё ТС</p>
                        </div>
                    </div>
                </a>

                <a id="brakes_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_BRAKES'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={BrakesLogo} alt="BrakesLogo" width="54px" height="54px"/>
                            <p>Тормоза</p>
                        </div>
                        <div className="right_c_h">
                            <p>Сокращает тормозной путь, за счет установки новых тормозных дисков</p>
                        </div>
                    </div>
                </a>

                <a id="bamper_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_BAMPER'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={BamperLogo} alt="BamperLogo" width="54px" height="54px"/>
                            <p>Бамперы</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет установить на Ваш автомобиль спортивные бамперы</p>
                        </div>
                    </div>
                </a>

                <a id="lights_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_LIGHTS'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={LigthsLogo} alt="LigthsLogo" width="54px" height="54px"/>
                            <p>Фары</p>
                        </div>
                        <div className="right_c_h">
                            <p>Усовершенствуйте внешний вид своего ТС установкой нового освещения</p>
                        </div>
                    </div>
                </a>

                <a id="hood_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_HOOD'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={HoodLogo} alt="HoodLogo" width="54px" height="54px"/>
                            <p>Капот</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет изменить стиль капота и добавить воздухозаборники</p>
                        </div>
                    </div>
                </a>

                <a id="spoiler_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_SPOILER'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={SpoilerLogo} alt="SpoilerLogo" width="54px" height="54px"/>
                            <p>Спойлер</p>
                        </div>
                        <div className="right_c_h">
                            <p>Обеспечивает лучшую управляемость, за счет давления воздуха на заднюю часть авто</p>
                        </div>
                    </div>
                </a>

                <a id="numbers_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_NUMBERS'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={CarnumbersLogo} alt="CarnumbersLogo" width="54px" height="54px"/>
                            <p>Номера</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет изменить оформление Ваших номерных знаков</p>
                        </div>
                    </div>
                </a>

                <a id="protection_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_PROTECTION'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={ProtectionLogo} alt="ProtectionLogo" width="54px" height="54px"/>
                            <p>Каркас Безоп.</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет установить защиту в салоне, как на раллийных авто</p>
                        </div>
                    </div>
                </a>

                <a id="lattice_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_LATTICE'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={LatticeLogo} alt="LatticeLogo" width="54px" height="54px"/>
                            <p>Радиат. решетка</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет изменить оформление радиаторной решетки Вашего авто</p>
                        </div>
                    </div>
                </a>

                <a id="flame_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_FLAME'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={FlameLogo} alt="FlameLogo" width="54px" height="54px"/>
                            <p>Винилы</p>
                        </div>
                        <div className="right_c_h">
                            <p>Усовершенствуйте внешний вид своего авто путем нанесения на него винила</p>
                        </div>
                    </div>
                </a>

                <a id="wings_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_WINGS'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={WingsLogo} alt="WingsLogo" width="54px" height="54px"/>
                            <p>Крылья</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет установить фирменные крылья на Ваше авто</p>
                        </div>
                    </div>
                </a>

                <a id="roof_menu" onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_LSCUSTOM', payload: 'PAGE_ROOF'})}>
                    <div className="content_home">
                        <div className="left_c_h">
                            <img src={RoofLogo} alt="RoofLogo" width="54px" height="54px"/>
                            <p>Крыша</p>
                        </div>
                        <div className="right_c_h">
                            <p>Позволяет модифицировать крышу Вашего авто</p>
                        </div>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);