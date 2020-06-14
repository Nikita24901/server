import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

class Confirm extends Component {

    state = {
        title: "",
        text: ""
    }

    constructor(props)
    {
        super(props);

        window.confirm = {
            setText: (title, text) => {
                this.setState({title: title, text: text});
            }
        }
    }

    componentWillUnmount = () => {
        window.confirm = undefined;
    }

    render() {

        return (
            <React.Fragment>
                <div className="confirm">
                    <div className="confirmbox">
                        <div className="headerinfo">
                            <div className="icon"></div>
                            <div className="textconfirmbox">
                                {this.state.title.length > 0 && <div className="name">
                                    <span className="nameplayer">{this.state.title}</span>
                                </div>}
                                {this.state.text.length > 0 && <div className="textbox">
                                    <span className="textinfo">{this.state.text}</span>
                                </div>}
                            </div>
                        </div>
                        <div className="footerinfo">
                            <button type="button" name="button" className="buttonyes"  onClick={() => rage.CallClient('client:OnDialogCallback', true)}> <span className="textbutton">Да</span> </button>
                            <button type="button" name="button" className="buttonno"  onClick={() => rage.CallClient('client:OnDialogCallback', false)}> <span className="textbutton">Нет</span> </button>
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

export default connect(mapStateToProps)(Confirm);