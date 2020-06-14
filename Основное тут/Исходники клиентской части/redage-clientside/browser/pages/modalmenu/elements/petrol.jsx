import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';
import rage from '../../../helpers/ragemp'

class Index extends Component {

    state = {
        input: ""
    }

    constructor(props) {
        super(props);
        
        window.petrol = {
            reset: () => {
                this.setState({input: ""});
            }        
        }
    }

    componentWillUnmount = () => {
        window.petrol = undefined;        
    }

    gov = () => {
        rage.CallClient('petrol.gov');
    }

    full = () => {
        //console.log('full')
        rage.CallClient('petrol.full');
    }

    yes = () => {
        //console.log('yes')
        rage.CallClient('petrol', this.input);
    }

    no = () => {
        //console.log('no')
        rage.CallClient('closePetrol');
    }
    
    render() {

        return (
            <React.Fragment>
                <div className="petrol-menu">
                    <input maxLength="3" value={this.state.input} onChange={event => this.setState({input: event.target.value.replace(/\D/,'')})}/>
                    <div className="btns">
                        <div className="btn gov" onClick={this.gov}></div>
                        <div className="btn full" onClick={this.full}></div>
                        <div className="btn yes" onClick={this.yes}></div>
                        <div className="btn no" onClick={this.no}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Index;