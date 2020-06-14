import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

import '../../../assets/css/menu.css'

class Menu extends Component {

    state = {
        menuid: "",
        title: "",
        elements: []
    }

    constructor(props)
    {
        super(props);

        window.menu = {
            openShop: (data) => {
                
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 1, name: item[0], addit: item[1]});
                });
                this.setState({
                    menuid: "shop",
                    title: "Магазин",
                    elements: elements
                });
            },
            openBlack: (data) => {
                
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 1, name: item[0], addit: item[1]});
                });
                this.setState({
                    menuid: "black",
                    title: "Черный рынок",
                    elements: elements
                });
            },
            openFib: (data) => {

                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "fib",
                    title: "Выдача оружия",
                    elements: elements
                });
            },
            openLspd: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "lspd",
                    title: "Выдача оружия",
                    elements: elements
                });
            },
            openArmy: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "army",
                    title: "Выдача одежды",
                    elements: elements
                });
            },
            openArmygun: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "army",
                    title: "Выдача оружия",
                    elements: elements
                });
            },
            openGov: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "gov",
                    title: "Выдача оружия",
                    elements: elements
                });
            },
            openGang: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "gang",
                    title: "Автотранспорт",
                    elements: elements
                });
            },
            openMafia: (data) => {
                var elements = [], json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    elements.push({id: i, type: 2, name: item});
                });
                this.setState({
                    menuid: "mafia",
                    title: "Перевозка",
                    elements: elements
                });
            }
        }
    }

    componentWillUnmount = () => {
        window.menu = undefined;
    }

    getTypeName = (type) => {
        if(type == 0) return `Устроиться`;
        else if(type == 1) return `Купить`;
        else return `Взять`;
    }

    render() {

        return (
            <React.Fragment>
                <div className="menu" id={this.state.menuid}>
                    <h1>{this.state.title}</h1>
                    <div className="elements">
                        {this.state.elements.map((value, index) => 
                            <div id={value.id} key={index} className="block">
                                <div className="left">{value.name}</div>
                                <div className="right" onClick={() => rage.CallClient('menu', this.state.menuid, value.id)}>{this.getTypeName(value.type)}</div>
                                {value.addit !== undefined && <span>{value.addit}</span>}
                            </div>
                        )}
                    </div>
                    <div className="buttons">
                        <div id="btn3" className="btn exit big" onClick={() => {
                            rage.CallClient('smExit');
                        }}>Выйти</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
};

export default connect(mapStateToProps)(Menu);