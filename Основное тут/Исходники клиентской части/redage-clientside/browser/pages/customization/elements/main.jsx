import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store'

import InputBlock from './input_item.jsx';
import ListBlock from './list_item.jsx';
import rage from '../../../helpers/ragemp';
import RAGE from '../../../helpers/ragemp';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="character_editor">
                    <h1>Редактор персонажа</h1>
                    <div className="element">
                        <label>Выберите пол:</label>
                        <div className="switch">
                            <div id="gendermale" className="btn" style={{backgroundColor: (this.props.data.gender === 'men' ? "#E74856" : "#373737")}} onClick={() => 
                                {
                                    if(this.props.data.gender !== 'men')
                                    {
                                        rage.CallClient('client:OnCustomizationChangeGender',"men")
                                        store.dispatch({type: 'CUSTOMIZATION_UPDATE_GENDER', payload: 'men'});
                                    }
                                }}>Мужской</div>
                            <div id="genderfemale" className="btn" style={{backgroundColor: (this.props.data.gender === 'women' ? "#E74856" : "#373737")}} onClick={() => 
                                {
                                    if(this.props.data.gender !== 'women')
                                    {
                                        rage.CallClient('client:OnCustomizationChangeGender',"women")
                                        store.dispatch({type: 'CUSTOMIZATION_UPDATE_GENDER', payload: 'women'});
                                    }
                                }}>Женский</div>
                        </div>
                    </div>
                    <div className="element">
                        <label>Отец:</label>
                        <ListBlock id="father" value="father"></ListBlock>
                    </div>
                    <div className="element">
                        <label>Мать:</label>
                        <ListBlock id="mother" value="mother"></ListBlock>
                    </div>

                    <div className="element">
                        <label>Схожесть:</label>
                        <InputBlock id="similar" step={0.1} min={0} max={1}/>
                    </div>
                    <div className="element">
                        <label>Цвет кожи:</label>
                        <InputBlock id="skin" step={0.1} min={0} max={1}/>
                    </div>
                    <h3>Лицо</h3>
                    <div className="element">
                        <label>Ширина носа:</label>
                        <InputBlock id="noseWidth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Высота носа:</label>
                        <InputBlock id="noseHeight" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Длина кончика носа:</label>
                        <InputBlock id="noseTipLength" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Глубина моста носа:</label>
                        <InputBlock id="noseDepth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Высота кончика носа:</label>
                        <InputBlock id="noseTipHeight" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Поломаность носа:</label>
                        <InputBlock id="noseBroke" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Высота бровей:</label>
                        <InputBlock id="eyebrowHeight" step={0.1} min={-1} max={1}/>  
                    </div>
                    <div className="element">
                        <label>Глубина бровей:</label>
                        <InputBlock id="eyebrowDepth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Высота скул:</label>
                        <InputBlock id="cheekboneHeight" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Ширина скул:</label>
                        <InputBlock id="cheekboneWidth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Глубина щеки:</label>
                        <InputBlock id="cheekDepth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Размер глаз:</label>
                        <InputBlock id="eyeScale" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Толщина губ:</label>
                        <InputBlock id="lipThickness" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Ширина челюсти:</label>
                        <InputBlock id="jawWidth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Форма челюсти:</label>
                        <InputBlock id="jawShape" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Высота подбородка:</label>
                        <InputBlock id="chinHeight" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Глубина подбородка:</label>
                        <InputBlock id="chinDepth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Ширина подбородка:</label>
                        <InputBlock id="chinWidth" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Подбородочный отступ:</label>
                        <InputBlock id="chinIndent" step={0.1} min={-1} max={1}/>
                    </div>
                    <div className="element">
                        <label>Обхват шеи:</label>
                        <InputBlock id="neck" step={0.1} min={-1} max={1}/>
                    </div>
                    <div v-if="!isSurgery">
                        <h3>Внешность</h3>
                        <div className="element">
                            <label>Волосы:</label>
                            <ListBlock id={this.props.data.gender === "men" ? "hairM" : "hairF"} value="hair"></ListBlock>
                        </div>
                        <div className="element">
                            <label>Брови:</label>
                            <ListBlock id="eyebrows" value="eyebrows"></ListBlock>
                        </div>

                        {this.props.data.gender === "men" && <div className="element">
                            <label>Бородка:</label>
                            <ListBlock id="beard" value="beard"></ListBlock>
                        </div>}
                        
                        <div className="element">
                            <label>Цвет волос:</label>
                            <ListBlock id="hairColor" value="hairColor"></ListBlock>
                        </div>
                        <div className="element">
                            <label>Цвет глаз:</label>
                            <ListBlock id="eyeColor" value="eyeColor"></ListBlock>
                        </div>
                    </div>
                    <div className="button" onClick={() => {
                        RAGE.CallClient('client:OnFinishCreateCharacter');
                    }}>Сохранить</div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.customizationdata
    };
};

export default connect(mapStateToProps)(Main);