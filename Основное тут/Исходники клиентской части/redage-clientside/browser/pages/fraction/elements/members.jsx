import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Members extends Component {

    state = {
        sorttype: 0,
        allcount: 0,
        onlinecount: 0,
        offlinecount: 0,
        member: []
    }

    sortMembers = () => {
        
    }

    getRenderMembersList = () => {

        var rows = [];
        //div v-for="member in members" v-if="showonly == 2 ? true : showonly == member[0]">
        for(var i = 0; i < this.props.members.length; i++)
        {
            var member = this.props.members[i];
            rows.push(<div key={member.id} className="userinfo">
                <div className="topinfouser">
                    <div className="infoid"><p>{member.id}</p></div>
                    <div className="onlinecheck"><div className={member.online ? 'onlinecircle' : 'offlinecircle'}></div></div>
                    <div className="infoname"><p>{member.name}</p></div>
                    <div className="rankuser"><p>{member.rank}</p></div>
                </div>
            </div>);
        }
        return <div className="boxreports">{rows}</div>;
    }

    render() {
        return (
            <React.Fragment>
               <div id="txt_1">
                    <p className="fractxt">Члены организации</p>
                    <div className="fractable">
                        <div className="toptable">
                            <p className="tableID" onClick={this.sortMembers(1)} className={(this.state.playerssort == 1 ? 'selectedSort' : '') + (this.state.sortrevert ? ' reversedSort' : '')}>ID</p>
                            <div className="tableonline">
                                <div className="online"><p>{this.state.onlinecount}</p></div>
                                <p className="separation">|</p>
                                <div className="offline"><p>{this.state.offlinecount}</p></div>
                            </div>
                            <div className="name"><p onClick={this.sortMembers(2)} className={(this.state.playerssort == 2 ? 'selectedSort' : '') + (this.state.sortrevert ? ' reversedSort' : '')}>Имя Фамилия</p></div>
                            <div className="rank"><p onClick={this.sortMembers(3)} className={(this.state.playerssort == 4 ? 'selectedSort' : '') + (this.state.sortrevert ? ' reversedSort' : '')}>Ранг</p></div>
                        </div>
                        <div className="boxes">
                            {this.getRenderMembersList()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        members: state.members
    };
};

export default connect(mapStateToProps)(Members);