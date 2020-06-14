import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

class Index extends Component {

    state = {
    }

    constructor(props) {
        super(props);
        
        window.tuning_lsc1 = {
            setVehicleStats: (speed, brakes, boost, clutch) => {
                this.setState({
                });
            }
        }
    }

    selectRed = () => {

        let sum = Math.round(betInput.val() * 1);
        betInput.val(1000);
        let bank = parseInt(bankOutput.textContent, 10);
        if(bank - sum >= llimit) {
            if(sum >= 1000) {
                buttonstate(1, 0);
                buttonstate(2, 0);
                let newbank = bank - sum;
                bankOutput.textContent = newbank;
                let currentBet = parseInt(redOutput.textContent, 10) + sum;
                return redOutput.textContent = currentBet;
            }
        }
    }

    selectZero = () => {

        let sum = Math.round(betInput.val() * 1);
        betInput.val(1000);
        let bank = parseInt(bankOutput.textContent, 10);
        if(bank - sum >= llimit) {
            if(sum >= 1000) {
                buttonstate(0, 0);
                buttonstate(2, 0);
                let newbank = bank - sum;
                bankOutput.textContent = newbank;
                let currentBet = parseInt(zeroOutput.textContent, 10) + sum;
                return zeroOutput.textContent = currentBet;
            }
        }
    }

    selectBlack = () => {

        let sum = Math.round(betInput.val() * 1);
        betInput.val(1000);
        let bank = parseInt(bankOutput.textContent, 10);
        if(bank - sum >= llimit) 
        {
            if(sum >= 1000) 
            {
                buttonstate(0, 0);
                buttonstate(1, 0);
                let newbank = bank - sum;
                bankOutput.textContent = newbank;
                let currentBet = parseInt(blackOutput.textContent, 10) + sum;
                return blackOutput.textContent = currentBet;
            }
        }
    }

    resetBet = () => {
        // Сбросить ставки можно только тогда, когда ставки открыты
        if(cstate == 0) {
            let sum = parseInt(bankOutput.textContent, 10);
            sum += (parseInt(redOutput.textContent, 10) + parseInt(zeroOutput.textContent, 10) + parseInt(blackOutput.textContent, 10));
            bankOutput.textContent = sum;
            redOutput.textContent = 0;
            zeroOutput.textContent = 0;
            blackOutput.textContent = 0;
            betInput.val(1000);
            buttonstate(0, 3);
        }
    }

    setBet = () => {
        // Поставить ставки можно только тогда, когда ставки открыты
        if(cstate == 0) 
        {
            let redSum = parseInt(redOutput.textContent, 10);
            let zeroSum = parseInt(zeroOutput.textContent, 10);
            let blackSum = parseInt(blackOutput.textContent, 10);
            if(totalbet + redSum + zeroSum + blackSum <= mlimit) 
            {
                if(redSum >= 1 || zeroSum >= 1 || blackSum >= 1) 
                {
                    let dredSum = parseInt(dredOutput.textContent, 10);
                    let dzeroSum = parseInt(dzeroOutput.textContent, 10);
                    let dblackSum = parseInt(dblackOutput.textContent, 10);
                    if(redSum >= 1) 
                    {
                        if(dzeroSum >= 1 && dblackSum >= 1) return;
                    } 
                    else if(zeroSum >= 1) 
                    {
                        if(dredSum >= 1 && dblackSum >= 1) return;
                    } 
                    else if(blackSum >= 1) 
                    {
                        if(dredSum >= 1 && dzeroSum >= 1) return;
                    }

                    let tredSum = dredSum + redSum;
                    let tzeroSum = dzeroSum + zeroSum;
                    let tblackSum = dblackSum + blackSum;
                    totalbet = tredSum + tzeroSum + tblackSum;
                    redOutput.textContent = 0;
                    zeroOutput.textContent = 0;
                    blackOutput.textContent = 0;
                    dredOutput.textContent = tredSum;
                    dzeroOutput.textContent = tzeroSum;
                    dblackOutput.textContent = tblackSum;
                    buttonstate(0, 3);
                    mp.trigger("placedbet", tredSum, tzeroSum, tblackSum);
                }
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                <main className="display-area  overlay">
                    <div className="roulete-page">
                        <div className="close-btn"></div>

                        <div className="roulete">
                        <div id="roulete-img" className="roulete-img"></div>

                        <div id="roulete-mark" className="mark"></div>

                        <div id="roulete-output" className="output">60</div>
                        </div>

                        <div className="controls">
                        <form action="" method="POST">
                            <h3>Сумма ставки</h3>

                            <div className="bet-controls">
                            <div className="js-min">Мин.</div>
                            <div className="js-double">х2</div>
                            <div className="js-half">1/2</div>
                            <div className="js-max">Макс.</div>
                            </div>

                            <h3>$</h3>
                            <div className="bet-input">
                                <input
                                    type="number"
                                    id="bet-input-id"
                                    name="bet-input"
                                    min="1000"
                                    step="1000"
                                    value="1000"/>
                            </div>

                            <div className="bet-choose-color">
                                <div id="redbet" className="red active" onClick={this.selectRed}>
                                    <span className="js-bet-red__output">0</span> $
                                </div>
                                <div id="zerobet" className="zero active" onClick={this.selectZero}>
                                    <span className="js-bet-zero__output">0</span> $
                                </div>
                                <div id="blackbet" className="black active" onClick={this.selectBlack}>
                                    <span className="js-bet-black__output">0</span> $
                                </div>
                            </div>

                            <a className="bet-reset" onClick={this.resetBet}>Сбросить</a>

                            <div className="bet-info">
                                <div className="balance">
                                    <p>Баланс: <span className="bankcashoutput">0</span>$</p>
                                    <p>Выигрыш: <span className="winOutput">0</span>$ <br/>Минимальный баланс: 15000$<br/>Максимальная ставка: 50000$</p>
                                </div>
                                    
                                <a className="submit" onClick={this.setBet}>Поставить</a>
                            </div>
                        </form>

                        <h3>Сделанные ставки</h3>
                        <div className="all-bets">
                            <div className="red">
                            <span className="js-bet-red__output__all">0</span> $
                            </div>
                            <div className="zero">
                            <span className="js-bet-zero__output__all">0</span> $
                            </div>
                            <div className="black">
                            <span className="js-bet-black__output__all">0</span> $
                            </div>
                        </div>

                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.roulete
    };
};

export default connect(mapStateToProps)(Index);