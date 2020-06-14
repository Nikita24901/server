import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndicatorsPlayer extends Component {

    state = {
        toggle: false,
        ammo: 0,
        microphone: 0,
        money: 0,
        bankmoney: 0,

        servertime: "",
        serverdate: ""
    }

    getMicrophoneColor = () =>
    {
        var ret_color = "";
        var micro = this.state.microphone;

        if(micro === 0) ret_color = "#E44242";
        else if(micro === 1) ret_color = "#fff";
        
        return ret_color;
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.settings !== undefined)
        {
            if(nextProps.settings.player != this.state.toggle) this.setState({toggle: nextProps.settings.player});
            if(nextProps.settings.ammo != this.state.ammo) this.setState({ammo: nextProps.settings.ammo});
            if(nextProps.settings.microphone != this.state.microphone) this.setState({microphone: nextProps.settings.microphone});
            if(nextProps.settings.money != this.state.money) this.setState({money: nextProps.settings.money});
            if(nextProps.settings.bankmoney != this.state.bankmoney) this.setState({bankmoney: nextProps.settings.bankmoney});
        }
        if(nextProps.server !== undefined)
        {
            if(nextProps.server.servertime != this.state.servertime) this.setState({servertime: nextProps.server.servertime});
            if(nextProps.server.serverdate != this.state.serverdate) this.setState({serverdate: nextProps.server.serverdate});
        }
    }
    
    render() {
        if(this.state.toggle)
        {
            //<div className="icon-bind"><span>B</span></div>
            return (<React.Fragment>
                {this.state.ammo > 0 && 
                <div className="indicators_addinational">

                    <div className="patrons">
                        <span className="icon-bullets"></span>
                        <p>{this.state.ammo}</p>
                    </div>
                    
                </div>}

                <div className="indicators_player">

                    <div className="data">
                        <p>{this.state.servertime}</p>
                        <p>{this.state.serverdate}</p>
                    </div>

                    <div className="microphone">
                        <div className="icon-microphone" style={{color: this.getMicrophoneColor()}}></div>
                    </div>

                    <div className="money">
                        <div className="icon-money"/>
                        <div className="money_block" >
                            <p>${this.state.money}</p>
                        </div>
                    </div>

                    <div className="money">
                        <div className="icon-bank"/>
                        <div className="money_block">
                            <p>${this.state.bankmoney}</p>
                        </div>
                    </div>

                </div>
            </React.Fragment>);
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        server: state.server,
        settings: state.hud
    };
};

export default connect(mapStateToProps)(IndicatorsPlayer);