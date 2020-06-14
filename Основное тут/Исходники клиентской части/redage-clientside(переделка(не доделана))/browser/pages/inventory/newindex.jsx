import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import inventoryIcon from '../../assets/img/inventory/briefcase.png'
import chartIcon from '../../assets/img/inventory/pie-chart.png'
import trunkIcon from '../../assets/img/inventory/trunk-opea.png'

class Index extends Component {

    state = {
        // Stats
        username: "",
        level: 0,
        exp: 0,
        level: 0,

        fractionname: "",
        fractionlevel: "",

        jobname: "",

        phonenumber: "",
        warnscount: "",

        licenses: "",
        registerdate: "",
        passid: "",
        bankid: "",

        // Player inventory
        initInvent: [],
        invent: [],

        // Trunk inventory
        initTrunk: [],
        trunktoggled: false,
        trunktitle: "",
        trunk: []
    }

    componentDidMount = () => {
        window.inventory = {
            toggle(toggle) {
                if(toggle === false)
                {
                    if(JSON.stringify(this.state.initInvent) != JSON.stringify(this.state.invent))
                    {
                        this.setState({initInvent: this.state.invent});
                        rage.CallClient("inventory", 7, JSON.stringify(this.state.invent));
                    }
                    
                    if(this.state.trunktoggled && JSON.stringify(this.state.initTrunk) != JSON.stringify(this.state.trunk))
                    {
                        this.setState({initTrunk: this.state.trunk});
                        rage.CallClient("inventory", 8, JSON.stringify(this.state.trunk));
                        rage.CallClient("inventory", 9);
                    }
                    else rage.CallClient("inventory", 9);
                }
                else
                {
                    /*$(`#grid-1 .dropbox`).remove();
                    $(`#grid-2 .dropbox`).remove();

                    $('#grid-1').append(dropbox);
                    $('#grid-2').append(dropbox);*/
                }
            }
        }
    }

    render() {

        if(this.props.state)
        {
            return (
                <React.Fragment>
                    <div className="vinventory interface__rd">
                        <ul className="head__tabs rounding">
                            <li className="tab active" id="invent"><img src={inventoryIcon} alt="invent"/></li>
                            <li className="tab active" id="chart"><img src={chartIcon} alt="chart"/></li>
                            <li className={this.state.trunktoggled ? "tab active" : "tab"} id="trunk"><img src={trunkIcon} alt="trunk"/></li>
                            <li className="tab close"  onClick={() => {rage.CallClient("client:OnCloseInventory")}}><span className="icon-close" style={{color: "#FFF"}}></span></li>
                        </ul>
                        
                        <div className="unit__main">
                            <div className="unit rounding inventory">
                                <div className="title">Инвентарь <span id="grid-1-num"></span></div>
                                <div className="inventory__box grid grid-1" id="grid-1"></div>
                            </div>
    
                            <div className="unit rounding statistics">
                                <div className="title">Статистика персонажа</div>
                                <div className="inventory__box">
                                    <div className="info"><div>Имя, Фамилия</div><div>{this.state.username}</div></div>
                                    <div className="info"><div>Уровень</div><div>{this.state.level}</div></div>
                                    <div className="info"><div>EXP</div><div>{this.state.exp}</div></div>
                                    {this.state.fractionlevel == 0 ? 
                                        <div>
                                            <div className="info"><div>Фракция</div><div>{this.state.fractionname}</div></div>
                                            <div className="info"><div>Ранг</div><div>{this.state.fractionlevel}</div></div>
                                        </div>
                                        :
                                        <div>
                                            <div className="info"><div>Работа</div><div>{this.state.jobname}</div></div>
                                        </div>
                                    }
                
                                    <div className="info"><div>Телефон</div><div>{this.state.phonenumber}</div></div>
                                    <div className="info"><div>Статус</div><div>{this.state.status}</div></div>
                                    <div className="info"><div>Варны</div><div>{this.state.warnscount}</div></div>
                                    <div className="info"><div>Лицензии</div><div>{this.state.licenses}</div></div>
                                    <div className="info"><div>Дата регистрации</div><div>{this.state.registerdate}</div></div>
                                    <div className="info"><div>Номер паспорта</div><div>{this.state.passid}</div></div>
                                    <div className="info"><div>Номер банковского счёта</div><div>{this.state.bankid}</div></div>
                                </div>
                            </div>
    
                            <div className="unit rounding trunk" style={{opacity: this.state.trunktoggled ? 1.0 : 0.0}}>
                                <div className="title">{this.state.trunktitle} <span id="grid-2-num"></span></div>
                                <div className="inventory__box grid grid-2" id="grid-2"></div>
                            </div>
                            
                            <ul id="contextMenu" className="dropdown-menu" role="menu">
                                <li><a tabIndex="-1" href="#">Использовать</a></li>
                                <li><a tabIndex="-1" href="#">Передать</a></li>
                                <li><a tabIndex="-1" href="#">Выбросить</a></li>
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        data: state.help
    };
};

export default connect(mapStateToProps)(Index);