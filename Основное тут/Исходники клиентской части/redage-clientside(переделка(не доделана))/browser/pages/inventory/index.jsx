import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Item from './elements/item';
import Context from './elements/context';

class Index extends Component {
    
    state = {
        key: 0,
        stats: [1, 2, "88005553535", "Admin", 0, 0, "123456789$", "987654321$", "", 9999999, 9999999],

        selectID: 0,
        selectType: 0,
        selectIndex: 0,

        outside: false,
        outHead: "",
        outType: 0,
        outitems: [[1, 5], [5, 10], [10, 500]],
        
        items: [[1, 5, 1], [5, 10, 0], [10, 500, 0], [11, 100, 0]],
        itemsData: {
            "-1": "Маска",
            "-3": "Перчатки",
            "-4": "Штаны",
            "-5": "Рюкзак",
            "-6": "Обувь",
            "-7": "Аксессуар",
            "-8": "Нижняя одежда",
            "-9": "Бронежилет",
            "-10": "Украшения",
            "-11": "Верхняя одежда",
            "-12": "Головной убор",
            "-13": "Очки",
            "-14": "Аксессуар",
            0: "Test Item",
            1: "Аптечка",
            2: "Канистра",
            3: "Чипсы",
            4: "Пиво",
            5: "Пицца",
            6: "Бургер",
            7: "Хот-Дог",
            8: "Сэндвич",
            9: "eCola",
            10: "Sprunk",
            11: "Отмычка для замков",
            12: "Сумка с деньгами",
            13: "Материалы",
            14: "Наркотики",
            15: "Сумка с дрелью",
            16: "Военная отмычка",
            17: "Мешок",
            18: "Стяжки",
            19: "Ключи от машины",
            40: "Подарок",
            41: "Связка ключей",
        
            20: `"На корке лимона"`,
            21: `"На бруснике"`,
            22: `"Русский стандарт"`,
            23: `"Asahi"`,
            24: `"Midori"`,
            25: `"Yamazaki"`,
            26: `"Martini Asti"`,
            27: `"Sambuca"`,
            28: `"Campari"`,
            29: `"Дживан"`,
            30: `"Арарат"`,
            31: `"Noyan Tapan"`,
        
            100: "Pistol",
            101: "Combat Pistol",
            102: "Pistol .50",
            103: "SNS Pistol",
            104: "Heavy Pistol",
            105: "Vintage Pistol",
            106: "Marksman Pistol",
            107: "Revolver",
            108: "AP Pistol",
            109: "Stun Gun",
            110: "Flare Gun",
            111: "Double Action",
            112: "Pistol Mk2",
            113: "SNSPistol Mk2",
            114: "Revolver Mk2",
        
            115: "Micro SMG",
            116: "Machine Pistol",
            117: "SMG",
            118: "Assault SMG",
            119: "Combat PDW",
            120: "MG",
            121: "Combat MG",
            122: "Gusenberg",
            123: "Mini SMG",
            124: "SMG Mk2",
            125: "Combat MG Mk2",
        
            126: "Assault Rifle",
            127: "Carbine Rifle",
            128: "Advanced Rifle",
            129: "Special Carbine",
            130: "Bullpup Rifle",
            131: "Compact Rifle",
            132: "Assault Rifle Mk2",
            133: "Carbine Rifle Mk2",
            134: "Special Carbine Mk2",
            135: "Bullpup Rifle Mk2",
        
            136: "Sniper Rifle",
            137: "Heavy Sniper",
            138: "Marksman Rifle",
            139: "Heavy Sniper Mk2",
            140: "Marksman Rifle Mk2",
        
            141: "Pump Shotgun",
            142: "SawnOff Shotgun",
            143: "Bullpup Shotgun",
            144: "Assault Shotgun",
            145: "Musket",
            146: "Heavy Shotgun",
            147: "Double Barrel Shotgun",
            148: "Sweeper Shotgun",
            149: "Pump Shotgun Mk2",
        
            180: "Нож",
            181: "Дубинка",
            182: "Молоток",
            183: "Бита",
            184: "Лом",
            185: "Гольф клюшка",
            186: "Бутылка",
            187: "Кинжал",
            188: "Топор",
            189: "Кастет",
            190: "Мачете",
            191: "Фонарик",
            192: "Швейцарский нож",
            193: "Кий",
            194: "Ключ",
            195: "Боевой топор",
        
            200: "Пистолетный калибр",
            201: "Малый калибр",
            202: "Автоматный калибр",
            203: "Снайперский калибр",
            204: "Дробь",
        },

        visible: false,
        x: 0,
        y: 0,
        type: 0
    }

    constructor(props) {
        super(props);

        window.inventory = {
            send: (id) => {
                let type = (this.state.selectType) ? 0 : this.state.outType;
                rage.CallClient('boardCB', id, type, this.state.selectIndex)
            },
            updateSelectInfo: (id, index, type) => {

                this.setState({
                    selectID: id,
                    selectIndex: index,
                    selectType: type
                });
            },
            setStats: (data) => {
                this.setState({stats: data});
            },
            setItems: (json) => {
                this.setState({
                    key: this.state.key + 1,
                    items: json
                });
            },
            setOutItems: (json) => {
                this.setState({
                    key: this.state.key + 1,
                    outType: json[0],
                    outHead: json[1],
                    outitems: json[2]
                });
            },
            setOutSide: (data) => {
                this.setState({outside: data});
            },
            itemUpd: (index, data) => {
                this.state.items[index] = data;
                this.forceUpdate();
            }
        }

        window.context = {
            show: (x, y) => {
                this.setState({visible: true, x: x, y: y});
            },
            hide: () => {
                this.setState({visible: false});
            },
            updateSelectInfo: (type) => {
                this.setState({type: type});
            }
        }
    }

    componentWillUnmount = () => {
        window.inventory = undefined;
    }

    clickInsideElement = (e, className) => {
        var el = e.srcElement || e.target;
        if (el.classList.contains(className)) {
            return el;
        } else {
            while (el = el.parentNode) {
                if (el.classList && el.classList.contains(className)) {
                    return el;
                }
            }
        }
        return false;
    }

    onOpenContext = () => {
        if (this.clickInsideElement(event, 'item')) {
            window.context.show(event.pageX, event.pageY);
        } else {
            window.context.hide();
        }
    }

    render() {

        if(this.props.status) {
            return (
                <React.Fragment>
                    <div className="board" 
                    onContextMenu={(e) => { 
                        event.preventDefault();
                        this.onOpenContext();
                    }}
                    
                    onClick={() => {
                        window.context.hide();
                    }}>
                        <div className="inventory">
                            <h1>Инвентарь</h1>
                            <div className="items">
                                {this.state.items.map((value, index) =>
                                    <Item
                                        key={index}
                                        index={index}
                                        id={value[0]}
                                        name={this.state.itemsData[value[0]]}
                                        count={value[1]}
                                        isactive={value[2]}
                                        subdata={value[3]}
                                        type="inv"/>
                                )}
                            </div>
                        </div>
                        
                        {this.state.outside ? <div className="outside">
                            <h1>{this.state.outHead}</h1>
                            <div className="items"> 
                                {this.state.outitems.map((value, index) =>
                                    <Item 
                                        key={index}
                                        index={index}
                                        id={value[0]}
                                        name={this.state.itemsData[value[0]]}
                                        count={value[1]}
                                        subdata={value[3]}
                                        type="out"/>
                                )}                            
                            </div>
                        </div> : <React.Fragment/>}
    
                        <div className="stats">
                            <h1>Статистика</h1>
                            <ul>
                                <li>Уровень:<span>{this.state.stats[0]}</span></li>
                                <li>EXP:<span>{this.state.stats[1]}</span></li>
                                <li>Телефон:<span>{this.state.stats[2]}</span></li>
                                <li>Статус:<span>{this.state.stats[3]}</span></li>
                                <li>Баны:<span>{this.state.stats[4]}</span></li>
                                <li>Варны:<span>{this.state.stats[5]}</span></li>
                                <li>Лицензии:<span>{this.state.stats[6]}</span></li>
                                <li>Дата регистрации:<span>{this.state.stats[7]}</span></li>
                                <li>Номер паспорта:<span>{this.state.stats[8]}</span></li>
                                <li>Номер счета:<span>{this.state.stats[9]}</span></li>
                                <li>Работа:<span>{this.state.stats[10]}</span></li>
                                <li>Фракция:<span>{this.state.stats[11]}</span></li>
                                <li>Ранг:<span>{this.state.stats[12]}</span></li>
                            </ul>
                        </div>
                    </div>
                    <Context visible={this.state.visible} x={this.state.x} y={this.state.y} type={this.state.type}/>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        status: state.dateState.inventory,
        data: state.inventory
    };
};

export default connect(mapStateToProps)(Index);