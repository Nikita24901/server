import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store'

import Navigations from './elements/navigations';
import Appearance from './elements/appearance';
import ChangeName from './elements/changename';
import Transfer from './elements/transfer';
import VipSelector from './elements/vipselector';
import Warn from './elements/warn'

import VipBronze from './elements/vip_bronze';
import VipSilver from './elements/vip_silver';
import VipGold from './elements/vip_gold';
import VipPlatinum from './elements/vip_platinum'

class Index extends Component {

    state = {
        menu: 0,
        totrans: null,
        aftertrans: null,
        fname: null,
        lname: null
    }

    componentDidMount = () =>
    {
        window.hud = {
            
        }
    }

    close = () => {
        this.active = false
        this.menu = 0;
        this.totrans = null;
        this.aftertrans = null;
        this.fname = null;
        this.lname = null;
    }

    onInputTrans = () => {
        if(!this.check(this.totrans)){
            this.totrans = null;
            this.aftertrans = null;
        } else {
            if(Number(this.totrans) < 0) this.totrans = 0;
            this.aftertrans = Number(this.totrans) * 100;
        }
    }

    onInputName = () => {
        if(this.check(this.fname) || this.check(this.lname)){
            this.fname = null;
            this.lname = null;
        }
    }

    check = (str) => {
        return (/[^a-zA-Z]/g.test(str));
    }

    buy = (id) => {
        let data = null;
        switch(id)
        {
            case 1:
                data = this.fname+"_"+this.lname;
                break;
            case 2:
                data = this.totrans;
                break;
            default:
                break;
        }
        mp.trigger("donbuy", id, data);
    }

    show = (stars) => {
        this.balance = stars,
        this.active = true;
    }

    render() {
        let page = this.props.data;
        switch (page) {
            case 'PAGE_NAVIGATIONS':
                page = <Navigations/>;
                break;
            case 'PAGE_APPEREARANCE':
                page = <Appearance/>;
                break;
            case 'PAGE_CHANGENAME':
                page = <ChangeName/>;
                break;
            case 'PAGE_TRANSFER':
                page = <Transfer/>;
                break;
            case 'PAGE_VIPSELECTOR':
                page = <VipSelector/>;
                break;
            case 'PAGE_VIP_BRONZE':
                page = <VipBronze/>;
                break;
            case 'PAGE_VIP_SILVER':
                page = <VipSilver/>;
                break;
            case 'PAGE_VIP_GOLD':
                page = <VipGold/>;
                break;
            case 'PAGE_VIP_PLATINUM':
                page = <VipPlatinum/>;
                break;
            case 'PAGE_WARN':
                page = <Warn/>;
                break;
            default: 
                page = false;
                break;
        }

        return (
            <React.Fragment>
                <div className="donate">
                    <div className="balance">
                        <p>RedBucks: {this.props.server.redbucks}</p>
                        <div className="redbucks"/>
                    </div>
                    <div className="center">
                        {page}
                        <div className="msg">Выход из меню - F9</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        server: state.server,
        data: state.donate
    };
};

export default connect(mapStateToProps)(Index);