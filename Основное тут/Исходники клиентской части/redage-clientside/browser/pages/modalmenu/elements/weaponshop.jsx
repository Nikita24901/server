import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';
import rage from '../../../helpers/ragemp'

import '../../../assets/css/weaponshop.css'

class WeaponShop extends Component {

    state = {
        btns: [true,false,false,false,false],
        index: 1,
        items: [["Pistol",1],["SNSPistol",1]],
		sliderActive: false,
        sliders: [],
        
        weapData: [
            [ 
                ["Pistol",1],
                ["CombatPistol",2],
                ["Revolver",3],
                ["HeavyPistol",4],
            ],
            [ 
                ["BullpupShotgun",11],
            ],
            [ 
                ["CombatPDW",111],
                ["MachinePistol",112],
            ],
        ],
        matsGang: [
            [
                ["Pistol",1],
                ["SNSPistol",1]
            ],
            [
                ["DoubleBarrelShotgun",1],
                ["SawnoffShotgun",1]
            ],
            [
                ["MicroSMG",1],
            ],
            [],
        ],
        matsMafia: [
            [
                ["Pistol",1],
                ["Pistol50",1],
                ["VintagePistol",1]
            ],
            [
                ["PumpShotgun",1],
            ],
            [
                ["MiniSMG", 1]
            ],
            [
                ["AssaultRifle",1],
                ["CompactRifle",1]
            ],
        ],
        gangAmmo: [
            ["Pistol Ammo", 0, 100, 1, 0],
            ["Shotgun Ammo", 0, 100, 4, 0],
            ["SMG Ammo", 0, 100, 2, 0],
        ],
        mafiaAmmo: [
            ["Pistol Ammo", 0, 100, 1, 0],
            ["Shotgun Ammo", 0, 100, 4, 0],
            ["SMG Ammo", 0, 100, 2, 0],
            ["Rifles Ammo", 0, 100, 4, 0],
        ],
        ammo: [
            ["Pistol Ammo",0,100,2,0],
            ["SMG Ammo",0,100,2,0],
            ["Rifles Ammo",0,100,2,0],
            ["SniperRifles Ammo",0,100,2,0],
            ["Shotguns Ammo",0,100,2,0],
        ]
    }

    constructor(props) {
        super(props);
        
        window.weaponshop = {
            setData: (type, json) => {

                let prices = JSON.parse(json);
    
                this.setState({
                    sliderActive: false,
                    sliders: []
                });

                if (type == 3) {
                    let ammoData = this.state.ammo;
                    prices.forEach(function (item, i, arr) {
                        ammoData[i][3] = item;
                    });
                    
                    this.setState({
                        sliderActive: true,
                        sliders: ammoData,
                        items: []
                    });
                    return;
                }
    
                let data = this.state.weapData[type];
                prices.forEach(function (item, i, arr) {
                    data[i][1] = item;
                });

                this.setState({items: data});
            }
        }
    }

    componentWillUnmount = () => {
        window.weaponshop = undefined;        
    }

    onClick = (id, event) => {
        if (id == 4) return;
        let ind = this.state.btns.indexOf(true);
        if (ind > -1) this.state.btns[ind] = false;
        this.state.btns[id] = true;
        this.state.index=id;

        this.forceUpdate();

        rage.CallClient('wshop', 'cat', id);
    }

    onBuy = (id) => {
        rage.CallClient('wshop', 'buy', id);
    }

    onRangeBuy = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        rage.CallClient('wshop', 'rangebuy', id, val);
    }

    exit = () => {
        rage.CallClient('closeWShop');
    }

    render() {

        return (
            <React.Fragment>
                <div className="weapons_buy">
                    <div className="left">
                        <div onClick={(e) => this.onClick(0, e)} className={"btn pistol" + (this.state.btns[0] ? " active" : "")}></div>
                        <div onClick={(e) => this.onClick(1, e)} className={"btn shot" + (this.state.btns[1] ? " active" : "")}></div>
                        <div onClick={(e) => this.onClick(2, e)} className={"btn smg" + (this.state.btns[2] ? " active" : "")}></div>
                        <div onClick={(e) => this.onClick(3, e)} className={"btn ammo" + (this.state.btns[3] ? " active" : "")}></div>
                    </div>
                    <div className="right">
                        <div className="head"></div>
                        <div className="elements">

                            {this.state.items.map((value, index) => 
                                <div className="block" key={index}>
                                    <label>{value[0]}</label>
                                    <div onClick={() => this.onBuy(index)} className="btn">Купить</div>
                                    <span>${value[1]}</span>
                                </div>
                            )}
                            
                            {this.state.sliders.map((value, index) => 
                                <div className="slider" key={index}>
                                    {console.log(value)}
                                    <label>{value[0]}</label>
                                    <input id="index" type="range" value={value[1]} onChange={(event) => 
                                    {
                                        let val = event.target.value;
                                        this.state.sliders[index][4] = val * this.state.sliders[index][3];            
                                        this.state.sliders[index][1] = val;
                                        this.forceUpdate();
                                    }
                                    }  step="1" min={0} max={value[2]}/>
                                    <output onClick={(e) => this.onRangeBuy(e)} id={'wbuyslider' + index}>{value[4]}$</output>
                                </div>
                            )}
                        </div>
                        <div className="buttons">
                            <div onClick={(e) => this.exit()} className="exit">Выход</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default WeaponShop;