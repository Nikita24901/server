import React, { Component } from 'react';

class Work extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="workitem">
                    <div className="title">
                        <div className="leftJob icon-arrow" onClick={this.props.previous}></div>
                        <span>{this.props.title}</span>
                        <div className="rightJob icon-arrow" onClick={this.props.next}></div>
                    </div>
                    <div className="wrap-rd scrollbar-inner">

                        <div className="description">
                            <p><span className="subtitle">Доступно:</span> {this.props.level} уровень.</p>
                            <p><span className="subtitle">О работе:</span> {this.props.description}</p>
                            <p><span className="subtitle">Зарплата:</span> {this.props.payment}</p>

                            {this.props.commands && <div>
                                <span>Команды</span>
                                <div className="commands" dangerouslySetInnerHTML={{__html: this.props.commands}}/>
                            </div>}
                        </div>
                        <div className="preview">
                            <img src={this.props.preview} className="rounding" alt="job-preview"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Work;