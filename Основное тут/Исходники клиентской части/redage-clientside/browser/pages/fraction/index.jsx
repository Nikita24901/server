import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Members from './elements/members.jsx'
import Invite from './elements/invite.jsx'
import Uninvite from './elements/uninvite.jsx'
import Rank from './elements/rank.jsx'

import FractionMembers from '../../assets/img/fraction/frac.svg';
import FractionInvite from '../../assets/img/fraction/fracadd.svg';
import FractionUninvite from '../../assets/img/fraction/fracremove.svg';
import FractionRank from '../../assets/img/fraction/fracrank.svg';

class Index extends Component {

    constructor(props) {
        super(props);

        window.fraction = 
        {
            updateMembers(memberslist, allcount, onlinecount, offlinecount) {
                store.dispatch({type: 'MEMBERS_SET', payload: {members: memberslist}});
                this.setState({
                    allcount: allcount,
                    onlinecount: onlinecount,
                    offlinecount: offlinecount
                });
            }
        }
    }

    render() {
        let page = this.props.data;
        switch (page) {
            case 'PAGE_MEMBERS':
                console.log("membves");
                page = <Members/>;
                break;
            case 'PAGE_INVITE':
                page = <Invite/>;
                break;
            case 'PAGE_UNINVITE':
                page = <Uninvite/>;
                break;
            case 'PAGE_RANK':
                page = <Rank/>;
                break;
            default: 
                page = false;
                break;
        }

        return (
            <React.Fragment>
                <div className="fmenu">
                    <div className="adaptive">
                        <div className="boxtop">
                            <div className="box">
                                <div className="header">
                                    <div className="arrow icon-close" onClick={() => rage.CallClient("closefm")}></div>
                                    <p className="txtheader">Управление огранизацией</p>
                                </div>
                                <div className="menubox">
                                    <div className="tabs">
                                        <input type="radio" name="inset" value="" id="tab_1"/>
                                        <label htmlFor="tab_1" className="one">
                                            <img src={FractionMembers} alt="FractionMembers" className="factionlist" style={{opacity: (this.props.data == "PAGE_MEMBERS" ? 1.0 : 0.2)}} onClick={() => {store.dispatch({type: 'SELECT_NEXT_PAGE_FRACTION', payload: 'PAGE_MEMBERS'})}}/>
                                        </label>

                                        <input type="radio" name="inset" value="" id="tab_2"/>
                                        <label htmlFor="tab_2" className="two">
                                            <img src={FractionInvite} alt="FractionInvite" className="factionlist" style={{opacity: (this.props.data == "PAGE_INVITE" ? 1.0 : 0.2)}} onClick={() => {store.dispatch({type: 'SELECT_NEXT_PAGE_FRACTION', payload: 'PAGE_INVITE'})}}/>
                                        </label>

                                        <input type="radio" name="inset" value="" id="tab_3"/>
                                        <label htmlFor="tab_3">
                                            <img src={FractionUninvite} alt="FractionUninvite" className="factionlist" style={{opacity: (this.props.data == "PAGE_UNINVITE" ? 1.0 : 0.2)}} onClick={() => {store.dispatch({type: 'SELECT_NEXT_PAGE_FRACTION', payload: 'PAGE_UNINVITE'})}}/>
                                        </label>

                                        <input type="radio" name="inset" value="" id="tab_4"/>
                                        <label htmlFor="tab_4">
                                            <img src={FractionRank} alt="FractionRank" className="factionlist" style={{opacity: (this.props.data == "PAGE_RANK" ? 1.0 : 0.2)}} onClick={() => {store.dispatch({type: 'SELECT_NEXT_PAGE_FRACTION', payload: 'PAGE_RANK'})}}/>
                                        </label>
                                        
                                        {page}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.fraction
    };
};

export default connect(mapStateToProps)(Index);

