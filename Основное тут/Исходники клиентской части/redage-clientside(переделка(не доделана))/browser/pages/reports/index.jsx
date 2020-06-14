import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Logo from '../../assets/img/report/redage-logo.png'

class Index extends Component {

    state = {
        value: [],
        qnum: 0,
        quser: 0,
        question: "",
        templates: []
    }

    render() {

        let page = this.props.data;
        switch (page) {                
            case 'PAGE_BEGINNERS':
                //page = <Beginners />;
                break;
            default: 
                page = false;
                break;
        }
        return (
            <React.Fragment>
                <div className="ticketfull">
                    <div className="ticketinside">
                        <div className="report">
                            <p className="reporttext">Репорты</p>
                            <div className="boxes">
                                <div className="boxreports">
                                    <div className="onereport" v-for="(value, index) in reports" onClick={() => get(index)}>
                                        <div className="reportinfo">
                                            <p className="task">Задача</p> <p className="tasknumber">№ {this.state.value[0]}</p> <p className="taskuser">{this.state.value[1]}</p>
                                        </div>
                                        <div className="reporttasks">
                                            <p>{this.state.value[2]}</p>
                                        </div>
                                        <div className="reportsadmin" v-if="value[3] != ''">
                                            <div className="adminname">
                                                <p>{this.state.value[3]}</p>
                                            </div>
                                            <div className="blockadmins">
                                                <svg width="9" height="100" viewBox="0 0 9 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0H9V100H0V0Z" fill="#BCA73A" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="answer">
                            <p className="reporttext">Ответы</p>
                            <div className="boxes">
                                <div className="boxreports">
                                    {this.state.quser != '' && <div className="onereport">
                                        <div className="reportinfo">
                                            <p className="task">Задача</p> <p className="tasknumber">№ {this.state.qnum}</p> <p className="taskuser">{this.state.quser}</p>
                                        </div>
                                        <div className="reporttasks">
                                            <p>{this.state.question}</p>
                                        </div>
                                    </div>}                                    
                                </div>
                            </div>

                            {this.state.quser != '' && <div className="answertoquestion">
                                <div className="textquestion">
                                    <p>
                                        <textarea className="user"
                                                placeholder="Введите ответ на вопрос..."
                                                cols="30" rows="5"
                                                v-model="answer"></textarea>
                                    </p>
                                </div>
                                <div className="buttonquestion">
                                    <div className="butabs">
                                        <p><button onClick={() => send()} className="buttonone">Ответить</button></p>
                                    </div>
                                    <div className="butabr">
                                        <p><button onClick={() => retrn()} className="buttononek">Вернуть</button></p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="template">
                            <p className="reporttext">Шаблоны</p>
                            <div className="boxestempl">
                                <div className="boxtemplates">
                                    
                                    {this.state.templates.map((item, index) =>
                                        <div className="templ">
                                        <div className="templtext"><p>{item}</p> </div>
                                        <div className="formclose">
                                            <div className="close">
                                                <p><button onClick={() => tplclose(index)} id="buttonclose"/></p>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="texttempl">
                                <p>
                                    <textarea className="user"
                                            placeholder="Напишите ваш текст для шаблона и нажмите на пустой"
                                            cols="30" rows="5" readOnly></textarea>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="imglogo">
                        <img src={Logo} alt="" width="360" height="92"/>
                    </div>
                    <div className="swglogo">
                        <p>
                            <span className="buttonswgclose icon-close" onClick={() => exit()}></span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.report
    };
};

export default connect(mapStateToProps)(Index);