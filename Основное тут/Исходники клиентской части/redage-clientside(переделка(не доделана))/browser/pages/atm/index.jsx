import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Menu from './elements/menu.jsx'
import Input from './elements/input.jsx'
import Business from './elements/business.jsx'

class Index extends Component {

    state = {
        type: 1,
        subdata: null,
        number: "",
        holder: "",
        balance: "",
        taxacc: "",
        placeholder: "значение"
    }

    componentDidMount = () => {
        window.atm = {
            open: (data) => {
                window.atm.reset();

                this.setState({
                    placeholder: data[2],
                    subdadta: data[1],
                    type: data[0]
                });

                if(this.state.type === 1) store.dispatch({type: 'SELECT_NEXT_PAGE_ATM', payload: 'PAGE_MENU'});
                else if(this.state.type === 2) store.dispatch({type: 'SELECT_NEXT_PAGE_ATM', payload: 'PAGE_INPUT'});
                else if(this.state.type === 3) store.dispatch({type: 'SELECT_NEXT_PAGE_ATM', payload: 'PAGE_BUSINESS'});
            },
            set: (num, name, bal, tax, sub) => {
                this.setState({
                    number: num,
                    holder: name,
                    balance: bal,
                    taxacc: tax
                });
            },
            setBalance: (balance) => {
                this.setState({balance: balance});
            },
            change: () => {

            },
            reset: () => {
                this.setState({
                    subdata: null,
                    value: "",
                    type: 1
                });
            }
        }
    }

    render() {

        let page = this.props.data;
        switch (page) {                
            case 'PAGE_MENU':
                page = <Menu type={this.state.type}/>;
                break;
            case 'PAGE_INPUT':
                page = <Input type={this.state.type} subdata={this.props.subdata} placeholder={this.props.placeholder}/>;
                break;
            case 'PAGE_BUSINESS':
                page = <Business type={this.state.type} subdata={this.state.subdata}/>;
                break;
            default: 
                page = false;
                break;
        }
        return (
            <React.Fragment>
                <div class="atm">
                    <div class="right">
                        {page}
                    </div>
                    <div class="left">
                        <p id="number">{this.state.number}</p>
                        <p id="holder">{this.state.holder}</p>
                        <p id="balance">{this.state.balance}$</p>
                        <p id="taxacc">{this.state.taxacc}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.atm
    };
};

export default connect(mapStateToProps)(Index);