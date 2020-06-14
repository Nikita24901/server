import React, { Component } from 'react';
import ragemp from '../../../helpers/ragemp'
import store from '../../../helpers/store'
import { connect } from 'react-redux';

import ActivePersone from '../../../assets/img/authentication/characters/person_active.png';
import FreePerson from '../../../assets/img/authentication/characters/person_free.jpg';
import RAGE from '../../../helpers/ragemp';

class Character extends Component {

    state = {
        create: false,

        reason: "",
        byadmin: "",
        time: "",
        until: ""
    }

    render() {

        var data = this.props.data;
        if(data === -1) // Слот свободен и доступен для создания
        {
            return (<React.Fragment>
                {this.state.create == false ?
                <div className="slot-col free active">
                    <div className="free__wrapper">
                        <img className="some-persone" src={FreePerson} alt="person_free" style={{filter: "grayscale(1)"}}/>
                        <h2><span className="free-title">Слот <b>№</b><span>{this.props.characterid}</span> свободен</span></h2>
                        <p>Вы можете создать нового персонажа, либо перенести старого на&nbsp;этот aккаунт</p>
                        <a className="btn  create-new  js-create-new-1" onClick={() => {
                            this.setState({create: true});
                        }}>Создать нового</a>
                    </div>
                </div>
                :
                <div className="slot-col free active create">
                    <div className="free__wrapper">
                        <img className="some-persone" src={FreePerson} alt="person_free"/>
                        <h2>
                            <span className="create-title">Создание нового персонажа</span>
                        </h2>
                        <form id="create-person-1" action="javascript:void(0);">
                            <div className="input-cont">
                                <input type="text"
                                    value={this.props.input.createname} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'createname', text: event.target.value}})}}
                                    id="new-person-1__name-id"
                                    placeholder="Имя (только на английском)"
                                    //pattern="[A-Za-z]"
                                    required/>
                            </div>

                            <div className="input-cont">
                                <input id="new-person-1__sername-id"
                                    value={this.props.input.createsurname} onChange={(event) => {store.dispatch({type: 'UPDATE_AUTH_INPUT', payload: {name: 'createsurname', text: event.target.value}})}}
                                    type="text"
                                    name="new-person-1__sername"
                                    placeholder="Фамилия (только на английском)"
                                    //pattern="[A-Za-z]"
                                    required/>
                            </div>

                            <input type="submit" value="Создать и перейти к настройке" onClick={() => {
                                RAGE.CallClient('client:OnCreateCharacter', this.props.characterid, this.props.input.createname, this.props.input.createsurname);
                            }}/>
                        </form>
                        <a className="cancel" onClick={() => {
                            this.setState({create: false});
                        }}>Отмена</a>
                    </div>
                </div>}
            </React.Fragment>);
        }
        else if(data === -2) // Слот свободен но не доступен для создания персонажа, слыш купи!!!
        {
            return (<React.Fragment>
                <div className="slot-col non-active active">
                    <div className="non-active__wrapper">
                        <h2>Слот <b>№</b><span>1</span> еще не&nbsp;активирован</h2>
                        <p>При покупке слота выдается навсегда, в нем можете создать нового персонажа</p>
                        <p className="price">
                            <span className="gray">Стоимость:</span> &nbsp;<b>$</b> <span className="value">1000</span> RedBucks
                        </p>
                        <p className="bonus">+ Бонус <span className="gold">VIP Gold</span> на срок 1 месяц.</p>
                        <a href="#" className="btn  unlock-slot js-unlock-slot-1">Разблокировать слот</a>
                    </div>
                </div>
            </React.Fragment>);
        }
        else
        {
            if(data[0] === "ban")
            {
                this.setState({
                    reason: data[1],
                    byadmin: data[2],
                    time: data[3],
                    until: data[4]
                });

                //free blocked
            }
            else {

                var name = data[0];
                var surname = data[1];
                var level = data[2];
                var exp = data[3];
                var maxexp = (3 + data[2] * 3);
                var fraction = data[4];
                var money = data[5];
                var bankmoney = data[6];
    
                return (<React.Fragment>
                    <div className="slot-col active">
                        <div className="active__wrapper">
                            <div className="person-cont">
                                <img className="active-persone" src={ActivePersone} alt="person"/>
                            </div>
                            <h3><span className="name">{name}</span> <span className="sername">{surname}</span></h3>
                            <ul className="characteristics">
                                <li>
                                    <b>Уровень</b>
                                    <span className="line"></span>
                                    <div>{level}</div>
                                </li>
                                <li>
                                    <b>Exp</b>
                                    <span className="line"></span>
                                    <div>
                                        <b>{exp}</b> / <span>{maxexp}</span>
                                    </div>
                                </li>
                                <li>
                                    <b>Фракция</b>
                                    <span className="line"></span>
                                    <div>{fraction}</div>
                                </li>
                                <li>
                                    <b>Денег на руках</b>
                                    <span className="line"></span>
                                    <div>
                                        <span>{money}</span> $
                                    </div>
                                </li>
                                <li>
                                    <b>Денег на счету</b>
                                    <span className="line"></span>
                                    <div>
                                        <span>{bankmoney}</span> $
                                    </div>
                                </li>
                            </ul>

                            <div className="cont">
                                <a className="btn btn-enter" onClick={() => {
                                    ragemp.CallClient("client:OnSelectCharacter", this.props.characterid);
                                }}>Войти</a>
                                <a href="delete-person.html" className="js-btn-delete-3  btn-delete">Удалить персонажа</a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>);
            }
        }
    }
}


function mapStateToProps(state) {
    return {
        input: state.authenticationInputs
    };
};

export default connect(mapStateToProps)(Character);