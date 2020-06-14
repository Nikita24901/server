import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

import PadUnlock from '../../../assets/img/hud/joblist/padlock-unlock.svg';
import PadLock from '../../../assets/img/hud/joblist/lock.svg';

class JobSelector extends Component {

    state = {
        jobid: -1,
        level: 1,
        
        list: 
        [
            {class: "electro", name: "Электрик", level: 0, jobid: 1},
            {class: "gazon", name: "Газонокосильщик", level: 0, jobid: 5},
            {class: "pochta", name: "Почтальон", level: 1, jobid: 2},
            {class: "taxi", name: "Таксист", level: 2, jobid: 3},
            {class: "bus", name: "Водитель автобуса", level: 2, jobid: 4},
            {class: "mechanic", name: "Автомеханик", level: 4, jobid: 8},
            {class: "truck", name: "Дальнобойщик", level: 5, jobid: 6},
            {class: "inkos", name: "Инкассатор", level: 8, jobid: 7},
        ],
    }

    constructor(props) {
        super(props);
        
        window.jobselector = {
            setData: (level, currentjob) => {
                this.setState({
                    level: level,
                    jobid: currentjob
                })
            }
        }
    }
    
    componentWillUnmount() {
        window.jobselector = undefined;
    }

    selectJob(selectedjob) {
        rage.CallClient("selectJob", selectedjob);
    }

    closeJobMenu() {
        rage.CallClient("closeJobMenu");
    }

    getWorkListRender() {
        var works_list = [];
        this.state.list.map((forjob, index) => {

            works_list.push(<div key={index} className={"workboxes " + forjob.class}>
                <div className="inkoslvl">
                    <p className="textlvl">LVL</p>
                    <p className="textlvl2">{forjob.level}</p>
                </div>

                <div className="worktoptxt ">
                    <p className="textboxwork"></p> {forjob.name}

                    {forjob.level <= this.state.level ?
                        <div className="jobstatus">
                            <img className="workimg" src={PadUnlock} alt="PadUnlock"/>
                            <p className="worktextopen">Открыто</p>
                        </div>   
                        : 
                        <div className="jobstatus">
                            <img className="workimg" src={PadLock} alt="PadLock"/>
                            <p className="worktextopen">Закрыто</p>
                        </div>
                    }
                </div>
                {(forjob.level <= this.state.level) && <div>
                    {forjob.jobid == this.state.jobid ? 
                        <div>
                            <div className="buttongetsettledred" onClick={() => this.selectJob(-1)}>
                                <p сlass="buttontxtgetsettled">Уволиться</p>
                            </div>
                        </div>
                    :
                        <div>
                            <div className="buttongetsettled" onClick={() => this.selectJob(forjob.jobid)}>
                                <p сlass="buttontxtgetsettled">Устроиться</p>
                            </div>
                        </div>
                    }
                    
                    
                </div>}
            </div>);
        });
        return (works_list);
    }

    render() {
        return (
            <React.Fragment>
                <div className="joblist">
                    <div className="adaptive">
                        <div className="boxtop">
                            <div className="box">
                                <div className="header">
                                    <div onClick={this.closeJobMenu} className="arrow"></div>
                                    <p className="txtheader">Устроиться на работу</p>
                                </div>
                                <div className="workbox">
                                    {this.getWorkListRender()}
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
    return {};
};

export default connect(mapStateToProps)(JobSelector);